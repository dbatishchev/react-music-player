import React, {Component} from 'react';

const {ipcRenderer} = window.require('electron'); // todo

export default class OpenButton extends Component {

  constructor(props) {
    super(props);

    ipcRenderer.on('fileData', (event, data) => {
      this.props.openSongsSuccess(data);
    });
  }

  handleClick = () => {
    ipcRenderer.send('openFile', () => {
      this.props.openSongsRequest();
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Open Files</button>
      </div>
    );
  }
}
