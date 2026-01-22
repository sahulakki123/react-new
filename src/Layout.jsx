import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <header>
        <nav>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/datashow">MyData</Link></li>
            </ul>
        </nav>
    </header>
    <Outlet/>
    </>
  )
}

export default Layout