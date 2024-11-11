import React from 'react'
import Logo from './Logo'

function Footer() {
    return (
        <div className='footer'>
            <div className='line'></div>
            <Logo />
            <ul>
                <li>Copyright 2024</li>
                <li>Terms & Conditions</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default Footer
