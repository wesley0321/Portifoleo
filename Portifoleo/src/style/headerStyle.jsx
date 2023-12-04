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
    background-color: #615e5e;
   
    a{
        background-color: #615e5e;
        text-decoration: none;
    
    }

    ul{
        background-color: #615e5e;
    }

    
    @media (max-width:800px){
       
    }

    a{
        text-decoration: none;
        color: white;
    }
`