import styled from "styled-components";


export const Img = styled.img`
width: 35vw;
border-radius: 70%;

`

export const Section = styled.section`

background-color: black;
display: flex;
align-items: center;
justify-content: space-around;
height: 100vh;
@media (max-width:800px){
       height: 80vh;
    }
    
    
`

export const Nome = styled.h1`
color: white;
font-size: 45px;


`

export const Funcao = styled.h2`
color: #7ca9e4;
`



export const Buton = styled.img`
width: 8vw;

@media (max-width:800px){
       
    width: 15vw;
    }

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