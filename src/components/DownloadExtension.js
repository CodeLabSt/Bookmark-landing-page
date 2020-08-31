import React from 'react'

import '../assets/styles/DownloadExtension.css'

import LogoChrome from '../assets/images/logo-chrome.svg'
import LogoFirefox from '../assets/images/logo-firefox.svg'
import LogoOpera from '../assets/images/logo-opera.svg'
import DotsBg from '../assets/images/bg-dots.svg'

const DownloadExtension = props => {
    return (
        <div className='download'>
            <div>
                <h3>Download the Extension</h3>
                <p>We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.</p>
            </div>
            <div>
                <div className='card'>
                    <img src={LogoChrome} alt='chrome' />
                    <h4>Add to Chrome</h4>
                    <p>Mnimum version 62</p>
                    <img src={DotsBg} alt='dots' />
                    <button>Add & install Extension</button>
                </div>
                <div className='card'>
                    <img src={LogoFirefox} alt='firefox' />
                    <h4>Add to Chrome</h4>
                    <p>Mnimum version 62</p>
                    <img src={DotsBg} alt='dots' />
                    <button>Add & install Extension</button>
                </div>
                <div className='card'>
                    <img src={LogoOpera} alt='opera' />
                    <h4>Add to Chrome</h4>
                    <p>Mnimum version 62</p>
                    <img src={DotsBg} alt='dots' />
                    <button>Add & install Extension</button>
                </div>
            </div>
        </div>
    )
}

export default DownloadExtension