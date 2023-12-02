import React from "react";
import eu from "../assets/eu.jpg"
import github from "../assets/github.png"
import instagram from "../assets/instagram.png"
import linkedin from "../assets/linkedin.png"
import { Img, Section, Nome, Funcao,Buton, CaixaButon } from "../style/InicioStyle"

function Inicio() {
    return (
        <>
            < Section>
                <figure>
                    <Img src={eu} alt="Essa é minha foto de perfil" />
                </figure>
                <div>
                    <Nome> Olá, eu sou Wesley ! </Nome>
                    <Funcao>Desenvolvedor Fronte-end</Funcao>
                </div>

            </Section>
            <CaixaButon>

                <a href="https://www.instagram.com/wesleyj.alves/"target="_blank">
                    <Buton src={instagram} alt="logotipo do instagram" /></a>

                <a href="https://www.linkedin.com/in/wesley-alves-6a2a80b1/"target="_blank">
                    <Buton src={linkedin} alt="" /></a>

                <a href="https://github.com/wesley0321"target="_blank">
                    <Buton src={github} alt="logotipo do Github" /></a>

            </CaixaButon>


        </>
    )
}

export default Inicio
