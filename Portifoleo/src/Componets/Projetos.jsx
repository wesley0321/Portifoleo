import React from "react";
import Foto from "../assets/dog.png"
import {Img} from "../style/ProjetosStyle"

function Projetos() {
    return(
        <section>
            <h2>Projetos</h2>
            <section>
                <figure>
                    <a href= "https://fantastika-req92edwf-wesleys-projects-b1bcb6ac.vercel.app/" target="_blank">
                    <Img src={Foto} alt="imagem do site Fantastika" />

                    </a>
                    
                </figure>
                <div>
                    <h2>LaPizza</h2>
                    <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
                    <p>react, sass, JAvascript</p>
                </div>
            </section>

            <section>
                <figure>
                    <a href= "https://fantastika-req92edwf-wesleys-projects-b1bcb6ac.vercel.app/" target="_blank">
                    <Img src={Foto} alt="imagem do site Fantastika" />

                    </a>
                    
                </figure>
                <div>
                    <h2>LaPizza</h2>
                    <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
                    <p>react, sass, JAvascript</p>
                </div>
            </section>
        </section>
    )
}

export default Projetos