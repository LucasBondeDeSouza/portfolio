import React from "react";
import './Nav.css'

const Nav = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <header>
            <h1 onClick={() => scrollToSection('main')}>Portfólio</h1>
            <div className="Nav">
                <p onClick={() => scrollToSection('about')}>About</p>
                <p onClick={() => scrollToSection('skills')}>Skills</p>
                <p onClick={() => scrollToSection('projects')}>Projects</p>
                <p onClick={() => scrollToSection('contact')}>Contact</p>
            </div>
        </header>
    );
}

export default Nav;
