import React from "react";

import './Nav.css'

const Nav = ({ scrollToSkills }) => {
    return (
        <div className="Nav">
            <p onClick={scrollToSkills}>Skills</p>
            <p>Projects</p>
            <p>Contact</p>
        </div>
    );
}

export default Nav;
