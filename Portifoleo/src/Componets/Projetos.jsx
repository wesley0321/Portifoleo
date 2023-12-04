import React from "react";
import github from "../assets/github.png"
import instagram from "../assets/instagram.png"
import linkedin from "../assets/linkedin.png"
import Fantastika from "../assets/dog.png"
import Frio from "../assets/inverno.png"

import { Buton, CaixaButon, Img, DivTitulo, Section, TextoImagagem, ImagemSite } from "../style/ProjetosStyle"


function Projetos() {
    return (
        <>

            <DivTitulo>
                <h1>Projetos</h1>
            </DivTitulo>


            <Section>
                <ImagemSite>
                    <figure>
                        <a href="https://inverno-one.vercel.app/" target="_blank">
                            <Img src={Frio} alt="imagem do site Fantastika" /></a>
                        <TextoImagagem>
                            <h2>Inverno</h2>
                            <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
                            <p>HTML e CSS</p>
                        </TextoImagagem>
                    </figure>

                    <figure>
                        <a href="https://fantastika-req92edwf-wesleys-projects-b1bcb6ac.vercel.app/" target="_blank">
                            <Img src={Fantastika} alt="imagem do site Fantastika" /></a>
                        <TextoImagagem>
                            <h2>Fantastika</h2>
                            <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
                            <p>HTML e CSS</p>
                        </TextoImagagem>
                    </figure>
                </ImagemSite>

                <ImagemSite>
                    <figure>
                        <a href="https://inverno-one.vercel.app/" target="_blank">
                            <Img src={Frio} alt="imagem do site Fantastika" /></a>
                        <TextoImagagem>
                            <h2>Inverno</h2>
                            <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
                            <p>HTML e CSS</p>
                        </TextoImagagem>
                    </figure>

                    <figure>
                        <a href="https://fantastika-req92edwf-wesleys-projects-b1bcb6ac.vercel.app/" target="_blank">
                            <Img src={Fantastika} alt="imagem do site Fantastika" /></a>
                        <TextoImagagem>
                            <h2>Fantastika</h2>
                            <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
                            <p>HTML e CSS</p>
                        </TextoImagagem>
                    </figure>

                </ImagemSite>

            </Section>

            <CaixaButon>

                <a href="https://www.instagram.com/wesleyj.alves/">
                    <Buton src={instagram} alt="logotipo do instagram" /></a>

                <a href="https://www.linkedin.com/in/wesley-alves-6a2a80b1/">
                    <Buton src={linkedin} alt="" /></a>

                <a href="https://github.com/wesley0321">
                    <Buton src={github} alt="logotipo do Github" /></a>

            </CaixaButon>

        </>
    )
}

export default Projetos