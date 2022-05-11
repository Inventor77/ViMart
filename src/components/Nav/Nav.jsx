import React from 'react'
import Dropdown from '../Filter/Dropdown/Dropdown'
import SearchInput from '../Filter/Search/SearchInput'
import Logo from '../Logo/Logo'
import Profile from '../Profile/Profile'
import './Nav.scss'


function Nav() {
    return (
        <div className='nav'>
            <div className='logo_container'>
                <Logo />
            </div>
            <div className='nav_right'>
                <div className='profile_container'>
                    <Profile />
                </div>
                <div className='filter_container'>
                    <SearchInput />
                    <Dropdown />
                </div>
            </div>
        </div>
    )
}

export default Nav