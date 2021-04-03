import React, { Component } from 'react';

class SearchBar extends Component {
  handleChange = () => {
    this.props.search(document.querySelector("input").value);
  };

  render() {
    return (
      <input className="form-search form-control" onChange={this.handleChange} type="text" name="" id="" />
    );
  }
}

export default SearchBar;
