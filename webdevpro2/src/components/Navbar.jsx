import { useState } from "react"
import "./Navbar.css"

function Navbar(){
    const [open, setOpen] = useState(false);
     
    return (
        <nav className="navbar">
            <div className="logo">My Logo</div>

            <ul>
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Services</a></li>
                <li><a>Contact Us</a></li>
            </ul>

            <div className="hamburger" onClick={()=>setOpen(!open)}>
                <div className={open? "bar-open" : "bar"}></div>
                <div className={open? "bar-open" : "bar"}></div>
                <div className={open? "bar-open" : "bar"}></div>
            </div>
        </nav>
    )
}

export default Navbar;

