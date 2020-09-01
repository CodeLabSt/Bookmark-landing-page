import React , { Fragment } from 'react'

import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Features from './components/Features'
import DownloadExtension from './components/DownloadExtension'
import Faq from './components/Faq'

const App = props => {
    return (
        <Fragment>
            <NavBar />
            <Banner />
            <Features />
            <DownloadExtension />
            <Faq />
        </Fragment>
    )
}

export default App