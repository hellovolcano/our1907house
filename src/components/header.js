import '../header.css'
import Nav from './nav'
import MobileNav from './mobile-nav'
import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'

function Header ( ) {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 700)
    const updateWindow = () => {
        setIsMobile(window.innerWidth < 700)
    }
    useEffect(() => {
        window.addEventListener('resize', updateWindow)
        return () => window.removeEventListener('resize', updateWindow)
    })
    return (
        <header>
                <div>
                        {/* <img class="header-img" src={house} alt="Our 1907 House" /> */}
                        <h1 class="header-h1">
                            <NavLink to="/" class="header-link">Our 1907 House</NavLink>
                        </h1>
                </div>
                <div>
                {isMobile ? (
                    <MobileNav /> ) : (<Nav/>
                )}
                </div>
        </header>
    )
}

export default Header
