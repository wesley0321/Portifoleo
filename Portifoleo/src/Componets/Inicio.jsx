import React from "react";
import eu from "../assets/eu.jpg"
import {Img} from "../style/InicioStyle"

function Inicio(){
    return(
        < section>
            <figure>
                <Img src={eu} alt="Essa é minha foto de perfil" />
            </figure>
            <div>
                <h1> Olá, eu sou Wesley ! </h1>
                <h2>Desenvolvedor Fronte-nd</h2>
            </div>
            
        </section>

        
    )
}

export default Inicio
