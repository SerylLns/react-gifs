import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    this.props.changeCurrent(this.props.Gifid);
  };

  render() {
    const src = `https://media.giphy.com/media/${this.props.Gifid}/giphy/200.gif`;
    return (
      <img
        onClick={this.handleClick}
        className="gif"
        src={src}
        alt=""
      />
    );
  }
};

export default Gif;
