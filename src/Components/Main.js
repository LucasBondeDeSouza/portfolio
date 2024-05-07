import { React } from "react";
import Typical from 'react-typical';

import './Main.css'

import Avatar from '../assets/avatar.png'

export default () => {

    return (
        <div id="main" className="Header--container">
            
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
        </div>
    )
}