import React, { useState } from 'react'
import './SearchInput.scss'

function SearchInput() {
    const [inputValue, setInputValue] = useState("")

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setInputValue(value);
    }
    return (
        <form className='search-bar'>
            <input
                value={inputValue}
                onChange={handleChange}
                placeholder='Search....'
                type="text"
                name="search"
            />
        </form>
    )
}

export default SearchInput