import React from 'react'

const SearchBar = ({handleChange, placeholder}) => {
        return (
            <div>
        <input
        type="search"
        placeholder={placeholder}
        onChange={handleChange}/>
            </div>
        )
    
}

export default SearchBar;