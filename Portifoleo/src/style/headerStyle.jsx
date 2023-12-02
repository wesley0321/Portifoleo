import styled from "styled-components"

export const StyleHeader = styled.header`

background-color: #615e5e;
height: 10vh;
display: flex;
align-items: center;
justify-content: center;


`

export const Navegacao = styled.ul`
    display: flex;
    justify-content: space-around;
    list-style: none;
    width: 75vw;
    font-size: 25px;
  
    

    @media (max-width:800px){
       
    }

    a{
        text-decoration: none;
        color: white;
    }
`