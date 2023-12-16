import { NavLink } from 'react-router-dom'
import '../header.css'

function NavLinks({liStyle}) {
    return (
            <ul>
                <li style={liStyle}><NavLink to="/posts">Posts</NavLink></li>
                <li style={liStyle}><NavLink to="/how-tos">How-Tos</NavLink></li>
                <li style={liStyle}><NavLink to="/about">About</NavLink></li>
            </ul>
    )
}

export default NavLinks
