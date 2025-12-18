import {FaBars, FaTimes} from "react-icons/fa"
import "./Navbar.css"
import { useRef } from "react"
import "//"


function Navbar(){
     const navRef = useRef();

     const showNavbar = () => {
         navRef.current.classList.toggle("responsive_nav");
     }
    
    return (
        <header>
             <h3>LOGO</h3>
             <nav ref={navRef}>
                <a href="/#">Home</a>
                <a href="/#">Shop</a>
                <a href="/#">Cart</a>
                <a href="/#">About Us</a>
                <button className="nav-btn nav-close-btn" onClick = {showNavbar}>
                   <FaTimes/>
                </button>

                <button className="nav-btn nav-close-btn" onClick = {showNavbar}>
                   <FaBars/> 
                </button>
             </nav>
        </header>
    )
}

export default Navbar;

