import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div className="SearchBar">
      <h3>Search:</h3>
      {/* Gets the value of the filteredProducts passed through the App.js file and show them with map */}
      <input 
        type="text" 
        name="searchBar" 
        onChange={value=>this.props.onSearchChange(value)}/>
      <input 
        type="checkbox" 
        name="stocked" 
        onChange={this.props.onCheckChange}/> Show stocked products
      </div>
    );
  }
}

export default SearchBar;
