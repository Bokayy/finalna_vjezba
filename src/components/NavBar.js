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
                <li id="nav-button" className="active"><a href ="#" >HOME</a></li>
                <li id="nav-button"><a href ="#">FEATURES</a></li>
                <li id="nav-button"><a href ="#">ABOUT</a></li>
                <li id="nav-button"><a href ="#">UI SS</a></li>
                <li id="nav-button"><a href ="#">DOWNLOAD</a></li>
            </ul>
        </nav>
    )
}

export default NavBar