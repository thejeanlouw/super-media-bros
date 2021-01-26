import React from 'react'
import {Link} from 'react-router-dom'
import NavLinks from './NavLinks'

const Navbar = () =>
{
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">Super Media Bros.</Link>
                <NavLinks />
            </div>
        </nav>
    )
}

export default Navbar