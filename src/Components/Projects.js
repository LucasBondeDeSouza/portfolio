import React from "react";

import './Projects.css'

import Conversao_aritmetica from '../assets/conversao-aritmetica.png'
import Relogio_mundial from '../assets/relogio-mundial.png'
import Cardapio_online from '../assets/cardapio-online.png'
import Clone_netflix from '../assets/clone-netflix.png'

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
        <div id="projects" className="Projects">
            <p>Projects</p>

            <div className="Projects--group">
                <a href="https://conversao-decimal.vercel.app/" target="_blank">
                    <div className="Projects--card">
                        <div className="Projects--image">
                            <img src={Conversao_aritmetica} alt="Conversão Aritmética" />
                        </div>
                        <div className="Projects--info">
                            <div className="Projects--name">
                                <h2>Conversão Aritmética</h2>
                            </div>
                            <div className="Projects--description">
                                <p>Este é um projeto de conversão de números decimais para binário, octal ou hexadecimal desenvolvido em Flask.</p>
                            </div>
                            <div className="Projects--languages">
                                <img src={Logo_HTML} alt="HTML" />
                                <img src={Logo_CSS} alt="CSS" />
                                <img src={Logo_Python} alt="Python" />
                            </div>
                        </div>
                    </div>
                </a>

                <a href="https://lucasbondedesouza.github.io/projeto_relogio/html/relogio.html" target="_blank">
                    <div className="Projects--card">
                        <div className="Projects--image">
                            <img src={Relogio_mundial} alt="Relógio Mundial" />
                        </div>
                        <div className="Projects--info">
                            <div className="Projects--name">
                                <h2>Relógio Mundial</h2>
                            </div>
                            <div className="Projects--description">
                                <p>Aplicação web que permite visualizar a hora e temperatura atual em diferentes cidades ao redor do mundo com precisão.</p>
                            </div>
                            <div className="Projects--languages">
                                <img src={Logo_HTML} alt="HTML" />
                                <img src={Logo_CSS} alt="CSS" />
                                <img src={Logo_JS} alt="JavaScript" />
                            </div>
                        </div>
                    </div>
                </a>

                <a href="https://cardapio-online-lac.vercel.app/" target="_blank">
                    <div className="Projects--card">
                        <div className="Projects--image">
                            <img src={Cardapio_online} alt="Cardapio online" />
                        </div>
                        <div className="Projects--info">
                            <div className="Projects--name">
                                <h2>Cardápio Online</h2>
                            </div>
                            <div className="Projects--description">
                                <p> versão eletrônica do menu de um restaurante, permitindo que os clientes visualizem opções de comida e façam pedidos.</p>
                            </div>
                            <div className="Projects--languages">
                                <img src={Logo_HTML} alt="HTML" />
                                <img src={Logo_CSS} alt="CSS" />
                                <img src={Logo_Tailwind} alt="Tailwind" />
                                <img src={Logo_JS} alt="JavaScript" />
                            </div>
                        </div>
                    </div>
                </a>

                <a href="https://clone-netflix-seven-zeta.vercel.app/" target="_blank">
                    <div className="Projects--card">
                        <div className="Projects--image">
                            <img src={Clone_netflix} alt="Relógio Mundial" />
                        </div>
                        <div className="Projects--info">
                            <div className="Projects--name">
                                <h2>Clone Netflix</h2>
                            </div>
                            <div className="Projects--description">
                                <p>Clone da página principal da Netflix reproduz a Home da Netflix, proporcionando uma experiência semelhante.</p>
                            </div>
                            <div className="Projects--languages">
                                <img src={Logo_React} alt="React" />
                                <img src={Logo_CSS} alt="CSS" />
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}