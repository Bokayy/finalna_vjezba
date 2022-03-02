import React, {useState} from 'react'
import logo from '../img/logo.png'
import './NavBar.css'

function NavBar() {

    const [nav,setNav] = useState(false);

    function changeBackground(){
        if(window.scrollY >= 50){
            setNav(true);
        }else{
            setNav(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <nav className={nav ? 'nav active' : 'nav'}>
            <a href="#" className="logo"><img src={logo} alt='logo'/></a>
            <input type = "checkbox" className="menu-btn" id="menu-btn" />
            <label classname ="menu-icon" for="menu-button">
                <span className="nav-icon"></span>
            </label>
            <ul className="menu">
                <li><a href ="#" className="active">HOME</a></li>
                <li><a href ="#" className="active">FEATURES</a></li>
                <li><a href ="#" className="active">ABOUT</a></li>
                <li><a href ="#" className="active">UI SS</a></li>
                <li><a href ="#" className="active">DOWNLOAD</a></li>
            </ul>
        </nav>
    )
}

export default NavBar