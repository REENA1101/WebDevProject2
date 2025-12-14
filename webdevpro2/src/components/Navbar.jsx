import {FaBars, FaTimes} from "react-icons/fa"
import "./Navbar.css"
import { useRef } from "react"


function Navbar(){

    
    return (
        <header>
             <h3>LOGO</h3>
             <nav>
                <a href="/#">Home</a>
                <a href="/#">Shop</a>
                <a href="/#">Cart</a>
                <a href="/#">About Us</a>
                <button>
                   <FaTimes/>
                </button>

                <button>
                   <FaBars/> ?
                </button>
             </nav>
        </header>
    )
}

export default Navbar;

