import {FaBars, FaTimes} from "react-icons/fa";
import "./Navbar.css";
import { Component, useRef, useState } from "react";
import Hamburger from 'hamburger-react';
import photo from "../assets/logo2.png";


function Navbar(){
     const navRef = useRef();
     const [isOpen, setOpen] = useState(false); 
     const showNavbar = () => {
         navRef.current.classList.toggle("responsive_nav");
         setOpen(!isOpen);
     };
    
    return (
        <header className="navbar">
                <img className="logo" src={photo} alt="logo"/>
                
                <div className="desktop-links">
                    <a href="/">Home</a>
                    <a href="/">Inventory</a>
                    <a href="/">Cart</a>
                    <a href="/">About Us</a>
                </div>

                <div className="hamburger">
                    <Hamburger toggled={isOpen} toggle={showNavbar}/>
                </div>

                <nav ref={navRef} className="mobile-nav">
                    <a href="/">Home</a>
                    <a href="/">Inventory</a>
                    <a href="/">Cart</a>
                    <a href="/">About Us</a>
                </nav>
        </header>
    );

    <div className="middle" >
          
    </div>

}

export default Navbar;

