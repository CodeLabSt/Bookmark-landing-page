import React , { Fragment } from 'react'

import NavBar from './components/NavBar'
import Banner from './components/Banner'

const App = props => {
    return (
        <Fragment>
            <NavBar />
            <Banner />
        </Fragment>
    )
}

export default App