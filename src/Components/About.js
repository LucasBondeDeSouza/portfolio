import React from 'react'

import './About.css'

import Img_about from '../assets/img-about.png'

export default () => {
    return (
        <div id="about" className="About">
            <p>About Me</p>
            <div className="About--content toRight">
                <div className='About--img'>
                    <img src={Img_about} alt='Imagem about' />
                </div>

                <p>
                    Olá! Sou Lucas Bonde, um entusiasta da tecnologia e estudante de Análise e Desenvolvimento de Sistemas apaixonado por resolver problemas por meio da programação. Busco constantemente expandir meu conhecimento e aprimorar minhas habilidades na criação de soluções inovadoras e eficientes. Com um forte interesse em Desenvolvimento Web, estou determinado a contribuir de forma significativa para a indústria da tecnologia. Além de meu entusiasmo pela programação, também valorizo a colaboração em equipe e estou sempre pronto para enfrentar novos desafios. Estou ansioso para compartilhar meu trabalho e experiências neste portfólio. Seja bem-vindo!
                </p>
            </div>
        </div>
    )
}