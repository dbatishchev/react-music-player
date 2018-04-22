const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const fs = require('fs');
const mp3Duration = require('mp3-duration');
const id3 = require('id3js');
const dataurl = require('dataurl');
const lodash = require('lodash');
const shortid = require('shortid');

const getDuration = (track) => {
  return new Promise((resolve, reject) => {
    mp3Duration(track.filePath, (err, duration) => {
      if (duration) {
        resolve(duration);
      }
      if (err) {
        reject(err);
      }
    });
  });
};

const getTags = (track) => {
  const {filePath} = track;
  return new Promise((resolve, reject) => {
    id3({file: filePath, type: id3.OPEN_LOCAL}, (err, tags) => {
      if (tags) {
        const {title, album, artist} = tags;
        Object.assign(track, {title, album, artist, track: tags.v1.track});
        resolve(track);
      }
      if (err) {
        reject(err);
      }
    });
  });
};

const createSongObject = (filePath) => {
  const track = {filePath, id: shortid.generate()};

  return convertSong(filePath)
    .then(songDataurl => Object.assign(track, {songDataurl}))
    .then(getDuration(track))
    .then(duration => Object.assign(track, {duration}))
    .then(track => getTags(track));
};

const openFile = () => {
  const files = electron.dialog.showOpenDialog({
    title: 'Open File',
    properties: ['openFile', 'openDirectory', 'multiSelections'],
    filters: [
      {name: 'Audio Files', extensions: ['mp3']},
    ]
  });

  if (!files) {
    return;
  }

  return Promise.all(lodash.map(files, createSongObject));
};

const convertSong = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(dataurl.convert({data, mimetype: 'audio/mp3'})); // todo
    });
  });
};

electron.ipcMain.on('openFile', (event, path) => {
  openFile().then((data) => {
    event.sender.send('fileData', data);
  });
});

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 600});

  // and load the index.html of the app.
  mainWindow.loadURL('http://localhost:3000');

  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
