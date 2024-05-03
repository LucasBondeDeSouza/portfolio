import { React, useRef } from "react";
import Typical from 'react-typical';

import './Header.css'

import Avatar from '../assets/avatar.png'

export default () => {
    const skillsRef = useRef(null);

    const scrollToSkills = () => {
        skillsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest', duration: 1000 }); // Ajuste a duração da rolagem aqui (1000ms = 1 segundo)
    };

    return (
        <div className="Header--container">
            <div className="Header--nav">
                <p onClick={scrollToSkills}>Skills</p>
                <p>Projects</p>
                <p>Contact</p>
            </div>

            <div className="Header--person">
                <div className="Header--avatar">
                    <img src={Avatar} alt="Avatar" />
                </div>

                <div className="Header--typical">
                    <p>
                        I'm Lucas Bonde{' '}
                        <Typical
                            loop={Infinity}
                            steps={[
                                'Dev Web',
                                3000,
                                '',
                                500,
                                'Dev Front-End',
                                3000,
                                '',
                                500,
                                'Dev Back-End',
                                3000,
                                '',
                                500,
                                'UI/UX',
                                3000
                            ]}
                        />
                    </p>
                </div>
            </div>
            <div ref={skillsRef} />
        </div>
    )
}