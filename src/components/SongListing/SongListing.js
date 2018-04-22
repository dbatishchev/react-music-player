import React, {Component} from 'react';
import map from 'lodash/map'
import './SongListing.css';

export default class SongListing extends Component {

  handleClick = (song) => {
    this.props.chooseSong(song.id);
  };

  render() {
    if (!this.props.songs || this.props.songs.length === 0) {
      return null;
    }

    return (
      <div className="song-listing">
        {map(this.props.songs, (s) => {
          return (
            <div className="song-listing-item" key={s.id} onClick={() => this.handleClick(s)}>
              <div className="song-listing-item__album">{s.album}</div>
              <div className="song-listing-item__title">{s.title}</div>
              <div className="song-listing-item__artist">{s.artist}</div>
              <div className="song-listing-item__duration">{s.duration}</div>
            </div>
          );
        })}
      </div>
    );
  }
}
