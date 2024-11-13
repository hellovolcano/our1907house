import { NavLink } from 'react-router-dom'
import '../header.css'

function NavLinks({liStyle}) {
    return (
            <ul>
                <li style={liStyle}><NavLink to="/about">about</NavLink></li>
                <li style={liStyle}><NavLink to="/history">history</NavLink></li>
                <li style={liStyle}><NavLink to="/projects">projects</NavLink></li>
                <li style={liStyle}><NavLink to="/guide-book">guide book</NavLink></li>
                <li style={liStyle}><a href="https://www.airbnb.com/rooms/1031391080104939965" target="_blank" rel="noreferrer" >book on airbnb</a></li>
            </ul>
    )
}

export default NavLinks
