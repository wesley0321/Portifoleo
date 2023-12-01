import React from "react";
import github from "../assets/github.png"
import instagram from "../assets/instagram.png"
import linkedin from "../assets/linkedin.png"
import { Buton, CaixaButon, Texto, Titulo, Section } from "../style/SobreStyle"

function Sobre() {
    return (
        <>
            <Section>
                <Titulo>Sobre</Titulo>
                <Texto>Eu chamo Wesley e no momento estou em transição de carreira para a área de Desenvolvimento Front-end, buscando a minha primeira oportunidade na area. Sempre me destaquei por ser um profissional apaixonado pela resolução de problemas e inovações. Eu adoro trabalhar em equipe e sempre buscando melhorias nos processos para tornar a jornada de trabalho mais ágil, compreendendo a particularidade de cada pessoa e com foco no resultado.
                    Nesses últimos meses estudei na escola Vai na Web algumas tecnologias como JAVASCRIPT, REACT, SASS.</Texto>
            </Section>

            <CaixaButon>

                <a href="https://www.instagram.com/wesleyj.alves/"><Buton src={instagram} alt="logotipo do instagram" /></a>
                <a href="https://www.linkedin.com/in/wesley-alves-6a2a80b1/"><Buton src={linkedin} alt="" /></a>
                <a href="https://github.com/wesley0321"><Buton src={github} alt="logotipo do Github" /></a>

            </CaixaButon>

        </>
    )

}

export default Sobre