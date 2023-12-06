import React from "react";

function Navbar({ setActivePage }) {
    return(
        <nav>
            <ul>
                <li onClick={() => setActivePage("home")}>Home</li>
                <li onClick={() => setActivePage("about")}>About</li>
                <li onClick={() => setActivePage("contact")}>Contact</li>
            </ul>
        </nav>
    );
}

export default Navbar;