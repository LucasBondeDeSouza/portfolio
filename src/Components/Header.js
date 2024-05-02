import React from "react";
import Typical from 'react-typical';

import './Header.css'

export default () => {
    return (
        <div className="Header--container">
            <div className="Header--nav">
                <p>Skills</p>
                <p>Projects</p>
                <p>About</p>
                <p>Contact</p>
            </div>

            <div className="Header--avatar"></div>

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
    )
}