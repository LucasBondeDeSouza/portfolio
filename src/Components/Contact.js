import React from "react";

import './Contact.css'

import Contact from '../assets/contact.png'

export default () => {
    return (
        <div id="contact" className="Contact">
            <p>Contact</p>

            <div className="Contact--content toRight">
                <div className="Contact--image">
                    <img src={Contact} alt='Contact Img' />
                </div>
                <article>
                    <h3>Email</h3>
                    <p>bondelucas77@gmail.com</p>
                </article>

                <article>
                    <h3>Linkedin</h3>
                    <a href="https://www.linkedin.com/in/lucasbonde" target="_blank">
                        <p>Visulizar Perfil</p>
                    </a>
                </article>

                <article>
                    <h3>Github</h3>
                    <a href="https://github.com/LucasBondeDeSouza" target="_blank">
                        <p>Visulizar Perfil</p>
                    </a>
                </article>

                <article>
                    <h3>Celular</h3>
                    <p>(11) 98544-2354</p>
                </article>
            </div>
        </div>
    )
}