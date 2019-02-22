import React from 'react'
import {Route } from "react-router-dom"
import Home from './Home';
import Auth from './Auth';

function Routes(props) {
    return (
        <div>
            <Route path = '/' component = {Auth} />
            <Route path = '/account' />
        </div>
    )
}

export default Routes
