import React from "react";

import './Nav.css'

const Nav = ({ scrollToSkills }) => {
    return (
        <header>
            <h1>Portfólio</h1>
            <div className="Nav">
                <p onClick={scrollToSkills}>Skills</p>
                <p>About</p>
                <p>Projects</p>
                <p>Contact</p>
            </div>
        </header>
    );
}

export default Nav;