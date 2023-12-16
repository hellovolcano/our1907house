import '../header.css'
import house from "../703logo_t.png"
import Nav from './nav'
import MobileNav from './mobile-nav'
import { NavLink } from 'react-router-dom'
import React, {useState, useEffect} from 'react'

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
                <div>
                    <NavLink to="/">
                        <img class="header-img" src={house} alt="Our 1907 House" />
                    </NavLink>
                </div>
                <div>
                    <h1>
                        Our 1907 House
                    </h1>
                </div>
            </div>
            {isMobile ? (
                <MobileNav /> ) : (<Nav/>
            )}
        </header>
    )
}

export default Header
