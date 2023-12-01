import styled from "styled-components"

export const StyleHeader = styled.header`

background-color: #615e5e;
height: 5vh;
display: flex;
    align-items: center;
    justify-content: center;


`

export const Navegacao = styled.ul`
    display: flex;
    justify-content: space-around;
    list-style: none;
    width: 75vw;
    

    @media (max-width:800px){
       
    }

    a{
        text-decoration: none;
        color: white;
    }
`