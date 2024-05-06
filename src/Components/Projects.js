import React from "react";

import './Projects.css'

import Conversao_aritmetica from '../assets/conversao-aritmetica.png'
import Relogio_mundial from '../assets/relogio-mundial.png'

import Logo_HTML from '../assets/logo-html.png'
import Logo_CSS from '../assets/logo-css.png'
import Logo_JS from '../assets/logo-js.png'
import Logo_Bootstrap from '../assets/logo-bootstrap.png'
import Logo_Tailwind from '../assets/logo-tailwind.png'
import Logo_Java from '../assets/logo-java.png'
import Logo_Python from '../assets/logo-python.png'
import Logo_React from '../assets/logo-react.png'
import Logo_Vue from '../assets/logo-vue.png'
import Logo_MySql from '../assets/logo-mysql.png'
import Logo_Git from '../assets/logo-git.png'
import Logo_NodeJs from '../assets/logo-nodejs.png'

export default () => {
    return (
        <div className="Projects">
            <p>Projects</p>

            <div className="Projects--group">
                <a href="https://conversao-decimal.vercel.app/" target="_blank">
                    <div className="Projects--card">
                        <div className="Projects--image">
                            <img src={Conversao_aritmetica} alt="Conversão Aritmética" />
                        </div>
                        <div className="Projects--name">
                            <h2>Conversão Aritmética</h2>
                        </div>
                        <div className="Projects--description">
                            <p>odoeodkoekdoek</p>
                        </div>
                        <div className="Projects--languages">
                            <img src={Logo_HTML} alt="HTML" />
                            <img src={Logo_CSS} alt="CSS" />
                            <img src={Logo_Python} alt="Python" />
                        </div>
                    </div>
                </a>

                <a href="https://lucasbondedesouza.github.io/projeto_relogio/html/relogio.html" target="_blank">
                    <div className="Projects--card">
                        <div className="Projects--image">
                            <img src={Relogio_mundial} alt="Relógio Mundial" />
                        </div>
                        <div className="Projects--name">
                            <h2>Relógio Mundial</h2>
                        </div>
                        <div className="Projects--description">
                            <p>odoeodkoekdoek</p>
                        </div>
                        <div className="Projects--languages">
                            <img src={Logo_HTML} alt="HTML" />
                            <img src={Logo_CSS} alt="CSS" />
                            <img src={Logo_JS} alt="JavaScript" />
                        </div>
                    </div>
                </a>

                <a href="https://conversao-decimal.vercel.app/" target="_blank">
                    <div className="Projects--card">
                        <div className="Projects--image">
                            <img src={Conversao_aritmetica} alt="Conversão Aritmética" />
                        </div>
                        <div className="Projects--name">
                            <h2>Conversão Aritmética</h2>
                        </div>
                        <div className="Projects--description">
                            <p>odoeodkoekdoek</p>
                        </div>
                        <div className="Projects--languages">
                            <img src={Logo_HTML} alt="HTML" />
                            <img src={Logo_CSS} alt="CSS" />
                            <img src={Logo_Python} alt="Python" />
                        </div>
                    </div>
                </a>

                <a href="https://lucasbondedesouza.github.io/projeto_relogio/html/relogio.html" target="_blank">
                    <div className="Projects--card">
                        <div className="Projects--image">
                            <img src={Relogio_mundial} alt="Relógio Mundial" />
                        </div>
                        <div className="Projects--name">
                            <h2>Relógio Mundial</h2>
                        </div>
                        <div className="Projects--description">
                            <p>odoeodkoekdoek</p>
                        </div>
                        <div className="Projects--languages">
                            <img src={Logo_HTML} alt="HTML" />
                            <img src={Logo_CSS} alt="CSS" />
                            <img src={Logo_JS} alt="JavaScript" />
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}