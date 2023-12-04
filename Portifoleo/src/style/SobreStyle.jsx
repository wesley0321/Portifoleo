import styled from "styled-components";


export const Texto = styled.p`
height: 40vh;
width: 50vw;
color: white;
text-align: justify;
font-size: 22px;

@media (max-width:800px){
       
    width: 90vw;
    height: 55vh;
    font-size: 20px;
    margin-bottom: 30px;
    overflow-y: scroll;
    }


`

export const Titulo = styled.h2`
font-size: 40px;
background-color:black; 
color: #7ca9e4;



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

export const Section = styled.section`
 background-color: #000000;
 height: 100vh;
 display: flex;
 justify-content: space-around;
 align-items: center;

 @media (max-width:800px){
     
    height: 80vh;
    flex-direction: column;
    }

`

export const Wesley = styled.img`
width: 25vw;

@media (max-width:800px){
       
    width: 25vw;
    }


`