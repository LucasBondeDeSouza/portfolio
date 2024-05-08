import React from "react";

import './Contact.css'

import { FaArrowDown } from 'react-icons/fa';

import Curriculo from '../assets/Curriculo.docx'

export default () => {
    const downloadFileName = "Curriculo_Lucas.docx";

    return (
        <div id="contact" className="Contact">
            <p>Contact</p>

            <div className="Contact--content">
                <div className="Contact--resume">
                    <div className="Contact--resume--text">
                        <h2>Baixe meu Portfólio</h2>
                        <h2><FaArrowDown /></h2>
                    </div>
                    <a href={Curriculo} download={downloadFileName}>Download do arquivo</a>
                </div>
            </div>
        </div>
    )
}