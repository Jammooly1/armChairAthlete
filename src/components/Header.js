import React from 'react'

import logo from '../assets/images/armChairLogo.jpg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>Arm Chair Athletes</h1>
        <p>Just 3 dudes that love basketball<br />
        designed by <a href="https://jamaldabas.com/" target="_blank">Jamal Dabas</a>.</p>
    </header>
)

export default Header
