import React from 'react'

import '../assets/styles/Banner.css'

import BannerImg from '../assets/images/illustration-hero.svg'

const Banner = props => {
    return (
        <div className='banner'>
            <div>
                <h1>A Simple Bookmark<br/>Manager</h1>
                <p>A clean and simple interface to organize your favourite wwbsites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
                <div>
                    <button>Get it on Chrome</button>
                    <button>Get it on Firefox</button>
                </div>
            </div>
            <div>
                <img src={BannerImg} alt='illustration-hero' />
            </div>
        </div>
    )
}

export default Banner