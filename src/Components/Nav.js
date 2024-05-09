import React from "react";
import './Nav.css'

import { FaArrowUp } from 'react-icons/fa';

const Nav = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <React.Fragment>
            <header>
                <h1 onClick={() => scrollToSection('main')}>Portfólio</h1>
                <div className="Nav">
                    <p onClick={() => scrollToSection('about')}>About</p>
                    <p onClick={() => scrollToSection('skills')}>Skills</p>
                    <p onClick={() => scrollToSection('projects')}>Projects</p>
                    <p onClick={() => scrollToSection('contact')}>Contact</p>
                </div>
            </header>

            <div onClick={() => scrollToSection('main')} className="Scroll-top">
                <FaArrowUp />
            </div>
        </React.Fragment>
    );
}

export default Nav;
