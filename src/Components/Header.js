import React from "react";
import Typical from 'react-typical';

import './Header.css'

export default () => {
    return (
        <div className="Header--container">
            <p>
                I'm Lucas{' '}
                <Typical
                    loop={Infinity}
                    steps={[
                        'Developer',
                        3000,
                        'Designer',
                        3000,
                        'UI/UX',
                        3000,
                        'Motion',
                        3000
                    ]}
                />
            </p>
        </div>
    )
}