import React , { Fragment } from 'react'

import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Features from './components/Features'
import DownloadExtension from './components/DownloadExtension'
import Faq from './components/Faq'
import Footer from './components/Footer'

const App = props => {
    return (
        <Fragment>
            <NavBar />
            <Banner />
            <Features />
            <DownloadExtension />
            <Faq />
            <Footer />
        </Fragment>
    )
}

export default App