import { React, useRef } from "react";
import Typical from 'react-typical';

import './Main.css'

import Avatar from '../assets/avatar.png'
import Nav from './Nav';

export default () => {
    const skillsRef = useRef(null);

    const scrollToSkills = () => {
        skillsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest', duration: 1000 });
    };

    return (
        <div className="Header--container">
            <Nav scrollToSkills={scrollToSkills} />
            
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