import styled from "styled-components";

export const Img = styled.img`
width: 30vw;

@media (max-width:800px){
       
       width: 65vw;
       }


`
export const Fundo = styled.section`
background-color: black;
display: flex;
justify-content: space-around;
align-items: center;
height: 70vh;

@media (max-width:800px){
       
       flex-direction: column;
       height: 70vh;
       }
`

export const FundoTexto = styled.div`
background-color: #615e5e;
width: 30vw;

@media (max-width:800px){
       
       width: 65vw;
       }
`

export const Titulo = styled.h2`
color: #7ca9e4;
background-color: black;
font-size: 35px;
display: flex;
justify-content: center;
align-items: end;
height: 10vh;
`


export const CaixaButon = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color:#7ca9e4;

@media (max-width:800px){
       
      height: 10vh;
       }

`

export const Buton = styled.img`
width: 8vw;

@media (max-width:800px){
       
       width: 15vw;
       }
`