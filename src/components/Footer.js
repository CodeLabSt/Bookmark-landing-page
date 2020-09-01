import React from 'react'

import '../assets/styles/Footer.css'

import LogoBookmark from '../assets/images/logo-bookmark-white.svg'
import FacebookIcon from '../assets/images/icon-facebook.svg'
import TwitterIcon from '../assets/images/icon-twitter.svg'


const Footer = props => {
    return (
        <footer>
            <div>
                <p>35,000 + ALREADY JOINED</p>
                <h2>Stay up-to-date with what<br />we're doing</h2>
                <div>
                    <input type='text' placeholder='Enter your email address' />
                    <button>Contact Us</button>
                </div>
            </div>
            <div>
                <img src={LogoBookmark} alt='logo' />
                <a href='#'>FEATURES</a>
                <a href='#'>PRICING</a>
                <a href='#'>CONTACT</a>
                <div>
                    <img src={FacebookIcon} alt='facebook-icon' />
                    <img src={TwitterIcon} alt='twitter-icon' />
                </div>
            </div>
        </footer>
    )
}

export default Footer