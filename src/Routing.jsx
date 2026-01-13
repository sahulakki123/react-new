import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'

import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'

const Routing = () => {
  return (
    <>
        <div>
            <Routes>
                <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='home' element={<Home/>}/>
                <Route path='about' element={<About/>}/>
                <Route path='contact' element={<Contact/>}/>
                <Route path='*' element={<h1>not  available</h1>}/>
                </Route>
            </Routes>
        </div>
    </>
  )
}

export default Routing