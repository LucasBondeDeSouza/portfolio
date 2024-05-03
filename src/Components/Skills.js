import React from "react";

import './Skills.css'

import Logo_HTML from '../assets/logo-html.png'
import Logo_CSS from '../assets/logo-css.png'
import Logo_JS from '../assets/logo-js.png'
import Logo_Python from '../assets/logo-python.png'
import Logo_Java from '../assets/logo-java.png'
import Logo_React from '../assets/logo-react.png'
import Logo_Vue from '../assets/logo-vue.png'
import Logo_MySql from '../assets/logo-mysql.png'
import Logo_Git from '../assets/logo-git.png'

export default () => {

    return (
        <div className="Skills--container">
            <p>Skills</p>

            <div className="Skills--line">
                <div className="Skills--loading_line">
                    <div className="Skills--image">
                        <img src={Logo_HTML} alt="Logo HTML" />
                    </div>

                    <div className="Skills--loading_bar html"></div>
                </div>

                <div className="Skills--loading_line">
                    <div className="Skills--image">
                        <img src={Logo_CSS} alt="Logo CSS" />
                    </div>

                    <div className="Skills--loading_bar css"></div>
                </div>

                <div className="Skills--loading_line">
                    <div className="Skills--image">
                        <img src={Logo_JS} alt="Logo js" />
                    </div>

                    <div className="Skills--loading_bar js"></div>
                </div>

                <div className="Skills--loading_line">
                    <div className="Skills--image">
                        <img src={Logo_Python} alt="Logo Python" />
                    </div>

                    <div className="Skills--loading_bar python"></div>
                </div>

                <div className="Skills--loading_line">
                    <div className="Skills--image">
                        <img src={Logo_Java} alt="Logo Java" />
                    </div>

                    <div className="Skills--loading_bar java"></div>
                </div>

                <div className="Skills--loading_line">
                    <div className="Skills--image">
                        <img src={Logo_React} alt="Logo React" />
                    </div>

                    <div className="Skills--loading_bar react"></div>
                </div>

                <div className="Skills--loading_line">
                    <div className="Skills--image">
                        <img src={Logo_Vue} alt="Logo Vue" />
                    </div>

                    <div className="Skills--loading_bar vue"></div>
                </div>

                <div className="Skills--loading_line">
                    <div className="Skills--image">
                        <img src={Logo_MySql} alt="Logo MySql" />
                    </div>

                    <div className="Skills--loading_bar mysql"></div>
                </div>

                <div className="Skills--loading_line">
                    <div className="Skills--image">
                        <img src={Logo_Git} alt="Logo Git" />
                    </div>

                    <div className="Skills--loading_bar git"></div>
                </div>
            </div>
        </div>
    )
}