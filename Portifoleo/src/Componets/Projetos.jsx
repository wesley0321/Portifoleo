import React from "react";
import github from "../assets/github.png"
import instagram from "../assets/instagram.png"
import linkedin from "../assets/linkedin.png"
import Foto from "../assets/dog.png"
import Frio from "../assets/inverno.png"
import { Buton, CaixaButon, Img, Fundo, FundoTexto, Titulo } from "../style/ProjetosStyle"


function Projetos() {
    return (
        <>
            <Titulo>Projetos</Titulo>
            <Fundo>

                <section>
                    <figure>
                        <a href="https://inverno-one.vercel.app/" target="_blank">
                            <Img src={Frio} alt="imagem do site Fantastika" />

                        </a>

                    </figure>
                    <FundoTexto>
                        <h2>Inverno</h2>
                        <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
                        <p>HTML e CSS</p>
                    </FundoTexto>
                </section>

                <section>
                    <figure>
                        <a href="https://fantastika-req92edwf-wesleys-projects-b1bcb6ac.vercel.app/" target="_blank">
                            <Img src={Foto} alt="imagem do site Fantastika" />

                        </a>

                    </figure>
                    <FundoTexto>
                        <h2>LaPizza</h2>
                        <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
                        <p>react, sass, JAvascript</p>
                    </FundoTexto>
                </section>
            </Fundo>

            <CaixaButon>

                <a href="https://www.instagram.com/wesleyj.alves/"><Buton src={instagram} alt="logotipo do instagram" /></a>
                <a href="https://www.linkedin.com/in/wesley-alves-6a2a80b1/"><Buton src={linkedin} alt="" /></a>
                <a href="https://github.com/wesley0321"><Buton src={github} alt="logotipo do Github" /></a>

            </CaixaButon>

        </>
    )
}

export default Projetos