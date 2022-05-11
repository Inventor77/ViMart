import React from 'react'
import Logo from '../Logo/Logo'
import './Nav.scss'


function Nav() {
    return (
        <div className='nav'>
            <div className='logo_container'>
                <Logo />
            </div>
            <div className='filter_container'>
            </div>
            <div className='profile_container'>
            </div>

        </div>
    )
}

export default Nav