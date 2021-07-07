import React from 'react';

const SearchBar = () =>{
    return(
        <input type='search'
        className='search'
        placeholder={this.props.placeholder}
        onChange={this.props.handleChange}
        />

    );
}
export default SearchBar;