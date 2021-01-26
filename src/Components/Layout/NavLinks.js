import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const NavLinks = () =>
{
    return(
        <ul className="right">
            <li><NavLink to='/Animation101'>Animation101</NavLink></li>
            <li><NavLink to='/LoadGtltfModel'>LoadGtltfModel</NavLink></li>
        </ul>
    )
}

export default NavLinks