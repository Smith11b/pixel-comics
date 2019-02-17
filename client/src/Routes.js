import React from 'react'
import {Route } from "react-router-dom"
import Home from './Home';

function Routes() {
    return (
        <div>
            <Route path = '/' component = {Home} />
            <Route path = '/account' />
        </div>
    )
}

export default Routes
