import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Homepage from './pages/Homepage'

export default function Routes() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path="/" exact component={Homepage} />
            </Switch>
        </BrowserRouter>
    )
}