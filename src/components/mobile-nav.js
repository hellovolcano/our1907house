import { NavLink } from 'react-router-dom'
import '../header.css'
import NavLinks from './nav-links'
import React, {useState} from 'react'
import { Drawer, Box } from '@mui/material'

import { Menu } from '@mui/icons-material'

function MobileNav() {
    const [state, setState] = useState(false)

    const buttonStyle = {
        background: 'none',
        border: 'none',
        color: 'black',
        marginTop: 20,
        marginRight: 10,
        cursor: 'pointer'
    }

    const liStyles = {
        listStyleType: 'none',
        padding: 10,
    }

    return (
        <div>
            <button style={buttonStyle} onClick={() => setState(true)}>
                <Menu fontSize="large" />
            </button>
            <Drawer open={state} anchor={"top"} onClose={() => setState(false)}>
                <Box
                    sx={{
                        width: "auto",
                        backgroundColor: 'white' 
                    }}
                    role="presentation" 
                    onClick={() => setState(false)}
                    onKeyDown={() => setState(false)}
                >
                    <div class="mobile-nav">
                        <NavLinks liStyle={liStyles} />
                    </div>
                    
                </Box>
            </Drawer>
        </div>
    )
}

export default MobileNav
