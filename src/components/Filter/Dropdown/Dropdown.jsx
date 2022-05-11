import React, { useState } from 'react'
import './Dropdown.scss'

function Dropdown() {
    const [inputValue, setInputValue] = useState("")

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setInputValue(value);
    }
    return (
        <form className='drop-down'>
            <select
                value={inputValue}
                onChange={handleChange}
                name="select"
            >
                <option value={5}>
                    5
                </option>
                <option value={10}>
                    10
                </option>
                <option value={15}>
                    15
                </option>
                <option value={20}>
                    20
                </option>
                <option value={25}>
                    25
                </option>
            </select>
        </form>
    )
}

export default Dropdown