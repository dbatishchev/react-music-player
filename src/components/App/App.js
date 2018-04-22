import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import OpenButtonContainer from "../../containers/OpenButtonContainer";
import SongListingContainer from "../../containers/SongListingContainer";
import PlayerToolbarContainer from "../../containers/PlayerToolbarContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">MP3 Player</h1>
        </header>
        <div className="app__open-files">
          <OpenButtonContainer />
        </div>
        <div className="app__song-listing">
          <SongListingContainer songs={this.props.songs} />
        </div>
        <PlayerToolbarContainer />
      </div>
    );
  }
}

export default App;
