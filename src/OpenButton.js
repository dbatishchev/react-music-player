import React, { Component } from 'react';
const {dialog} = window.require('electron').remote; // todo

export default class OpenButton extends Component {

  handleClick = () => {
    console.log(dialog)
  };

  render() {
    return (
      <button onClick={this.handleClick}>Open Files</button>
    );
  }
}
