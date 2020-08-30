import React , { useState } from 'react'

import '../assets/styles/NavBar.css'

import LogoBookmark from '../assets/images/logo-bookmark.svg'
import HamburgerMenu from '../assets/images/icon-hamburger.svg'
import CloseMenu from '../assets/images/icon-close.svg'
import FacebookIcon from '../assets/images/icon-facebook.svg'
import TwitterIcon from '../assets/images/icon-twitter.svg'

const NavBar = props => {

    const [mobileMenu,setMobileMenu] = useState(HamburgerMenu)
    const [expanded,setExpanded] = useState(false)

    const handleMobileMenu = () => {
        let menu = document.querySelectorAll('nav div')[1]
        
        if(!expanded){
            menu.style.transform = 'translateY(0)'
            setExpanded(true)
            setMobileMenu(CloseMenu)
        }else{
            menu.style.transform = 'translateY(-200vh)'
            setExpanded(false)
            setMobileMenu(HamburgerMenu)
        }
    }

    return (
        <nav>
            <div>
                <img src={LogoBookmark} alt='logo' />
            </div>
            <img src={mobileMenu} onClick={handleMobileMenu} alt='mobile-menu' />
            <div>
                <a href='#'>FEATURES</a>
                <a href='#'>PRICING</a>
                <a href='#'>CONTACT</a>
                <a href='#'>LOGIN</a>
                <div>
                    <img src={FacebookIcon} alt='facebook-icon' />
                    <img src={TwitterIcon} alt='twitter-icon' />
                </div>
            </div>
        </nav>
    )
} 

export default NavBar