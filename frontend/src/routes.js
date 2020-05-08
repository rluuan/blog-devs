import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Homepage from './pages/Homepage'
import Posts from './pages/Posts'

export default function HandleRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/article">
                    <Route path="/posts" element={<Posts />} />
                </Route>
            </Routes>
        </Router>
    )
}