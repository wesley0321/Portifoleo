import styled from "styled-components";


export const Section = styled.section`

height: 100vh;
display: grid;
/* grid-template-columns: repeat( 2, 1fr) ; */
background-color: black;
align-items: center;
justify-content: space-around;
overflow-y: scroll;


figure{

    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 30vw;

}

h2{
    color:#7ca9e4 ;
}

      
@media (max-width:800px){
    
      
 }

 @media (max-width:800px){
       
       height: 100vh;
       overflow-y: scroll;
 }

`

export const TextoImagagem = styled.div`
color: white;
width: 30vw;

@media (max-width:800px){
      width: 79vw;
      
 }


`

export const ImagemSite = styled.div`
    width: 70vw;
    height: 40vh;
    display: flex;
    justify-content: space-around;

    @media (max-width:800px){
       flex-direction: column;
       height: 75vh;
       
 }


`


export const DivTitulo = styled.div`

background-color: black;

h1{
    color: white;
    margin-left: 20px;
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

export const Buton = styled.img`
width: 8vw;


@media (max-width:800px){
       width: 15vw;
      
 }

`

export const Img = styled.img`
width: 30vw;

@media (max-width:800px){
       width: 70vw;
      
 }

`