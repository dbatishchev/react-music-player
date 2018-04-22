import React, {Component} from 'react';
import './PlayerToolbar.css';

export default class PlayerToolbar extends Component {

  render() {
    if (!this.props.song) {
      return null;
    }

    return (
      <div className="player-toolbar">
        <audio controls src={this.props.song.songDataurl} />
      </div>
    );
  }
}
