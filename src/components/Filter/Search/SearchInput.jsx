import React, { useState, useContext } from 'react'
import './SearchInput.scss'
import { URLContext } from '../../../context/URLContext'

function SearchInput() {
    const [inputValue, setInputValue] = useState("");
    const { setQ } = useContext(URLContext);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setInputValue(value);
        setQ(value);
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