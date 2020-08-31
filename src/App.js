import React , { Fragment } from 'react'

import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Features from './components/Features'
import DownloadExtension from './components/DownloadExtension'

const App = props => {
    return (
        <Fragment>
            <NavBar />
            <Banner />
            <Features />
            <DownloadExtension />
        </Fragment>
    )
}

export default App