import React , { useState } from 'react'

import '../assets/styles/Features.css'

import Tab1Img from '../assets/images/illustration-features-tab-1.svg'
import Tab2Img from '../assets/images/illustration-features-tab-2.svg'
import Tab3Img from '../assets/images/illustration-features-tab-3.svg'

const Features = props => {

    let imgs = [Tab1Img,Tab2Img,Tab3Img]

    const [panelImage,setPanelImage] = useState(Tab1Img)

    const handleTab = btn => {
        let buttons = document.querySelectorAll('.features>div:nth-child(3) button')        

        buttons.forEach(button => {
            if(button.classList.contains('active')){
                button.classList.remove('active')
            }
            
            if(button === btn.target){
                button.classList.add('active')
                setPanelImage(imgs[parseInt(btn.target.name)])
            }
        })
    }

    return (
        <div className='features'>
            <h3>Features</h3>
            <p>Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
            <div>
                <button className='active' onClick={handleTab} name='0'>Simple Bookmarking</button>
                <button onClick={handleTab} name='1' >Speedy Searching</button>
                <button onClick={handleTab} name='2' >Easy Sharing</button>
            </div>
            <div>
                <div>
                    <img src={panelImage} alt='features-panel' />
                </div>
                <div>
                    <h1>Bookmark in one click</h1>
                    <p>Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over you manage your favourite sites</p>
                    <button>Get it on Chrome</button>
                </div>
            </div>
        </div>
    )
}

export default Features