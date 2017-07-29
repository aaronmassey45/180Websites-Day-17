import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }
  handleChange(term) {
    this.setState({ term });
    this.props.onSearchBarChange(term);
  }
  render() {
    return (
      <div className="SearchBar">
        <input type="text" ref="search" className="" value={this.state.term} onChange={e => this.handleChange(e.target.value)} />
      </div>
    );
  }
}
