import React from 'react'

import logo from '../assets/images/acalogo.png';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>Armchair Athletes</h1>
        <p>Just 3 dudes that love basketball</p>

        {/* <br />
        designed by <a href="https://jamaldabas.com/" target="_blank">Jamal Dabas</a></p> */}
    </header>
)

export default Header
 