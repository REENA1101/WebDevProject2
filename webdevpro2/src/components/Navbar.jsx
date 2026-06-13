import {FaBars, FaTimes} from "react-icons/fa"
import "./Navbar.css"
import { Component, useRef, useState } from "react"
import Hamburger from 'hamburger-react'



function Navbar(){
     const navRef = useRef();
     const [isOpen, setOpen] = useState(false); 

     const showNavbar = () => {
         navRef.current.classList.toggle("responsive_nav");
         setOpen(!isOpen);
     };
    
    return (
        <header>
                <h3>Logo</h3>
                
                <div>
                    <a href="/#">Home</a>
                    <a href="/#">Shop</a>
                    <a href="/#">Cart</a>
                    <a href="/#">About Us</a>
                </div>

             <nav ref={navRef}>
                <a href="/#">Home</a>
                <a href="/#">Shop</a>
                <a href="/#">Cart</a>
                <a href="/#">About Us</a>
             </nav>

            <div className="hamburger">
                <Hamburger toggled={isOpen} toggle={showNavbar}/>
            </div>
            
        </header>
    )
}

export default Navbar;

