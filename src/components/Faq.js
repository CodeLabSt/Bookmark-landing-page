import React from 'react'

import '../assets/styles/Faq.css'

import IconArrow from '../assets/images/icon-arrow.svg'

const Faq = props => {

    const handleAccordionClick = id => {
        let info = document.getElementById(id)
        let img = info.previousSibling.querySelector('img')

        if(!info.classList.contains('expanded')){
            info.style.display = 'flex'
            info.style.height = '100%'
            img.style.transform = 'rotateZ(180deg)'
            info.classList.add('expanded')
        }else{
            info.style.display = 'none'
            info.style.height = '0px'
            img.style.transform = 'rotateZ(0deg)'
            info.classList.remove('expanded')
        }                
    }

    return (
        <div className='faq'>
            <div>
                <h3>Frequently Asked Questions</h3>
                <p>Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.</p>
            </div>
            <div className='accordion'>
                <div>
                    <div onClick={() => handleAccordionClick('first-item')}>
                        <h4>What is Bookmark?</h4>
                        <img src={IconArrow} alt='icon-arrow' />
                    </div>
                    <div id='first-item'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                </div>
                <div>
                    <div onClick={() => handleAccordionClick('second-item')}>
                        <h4>How can I request a new browser?</h4>
                        <img src={IconArrow} alt='icon-arrow' />
                    </div>
                    <div id='second-item'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                </div>
                <div>
                    <div onClick={() => handleAccordionClick('third-item')}>
                        <h4>Is there a mobile app?</h4>
                        <img src={IconArrow} alt='icon-arrow' />
                    </div>
                    <div id='third-item'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                </div>
                <div>
                    <div onClick={() => handleAccordionClick('fourth-item')}>
                        <h4>What about other Chromium browsers?</h4>
                        <img src={IconArrow} alt='icon-arrow' />
                    </div>
                    <div id='fourth-item'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                </div>
            </div>
            <button>More Info</button>
        </div>
    )
}

export default Faq