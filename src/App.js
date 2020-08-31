import React , { Fragment } from 'react'

import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Features from './components/Features'

const App = props => {
    return (
        <Fragment>
            <NavBar />
            <Banner />
            <Features />
        </Fragment>
    )
}

export default App