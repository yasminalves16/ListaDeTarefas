import styled, { keyframes } from "styled-components";

export const Container = styled.main`
  display: flex;
  height: 100vh;
  justify-content: space-evenly;
  align-items: center;
`;

const appearFromLeft = keyframes`
    from{
        opacity: 0;
        transform: translateX(-50px)
    }
    to {
        opacity: 1;
        transform: translateX(0px)
    }
`;

export const Figure = styled.figure`
  animation: ${appearFromLeft} 2.5s;
  img {
    width: 30vw;
    border-radius: 50%;
    box-shadow: 0 0 0 20px rgba(255, 255, 255, 0.5);
  }
`;

const shake_horizontal = keyframes `
    0%,
    100% {
      transform: translateX(0);
    }
    10%,
    30%,
    50%,
    70% {
      transform: translateX(-10px);
    }
    20%,
    40%,
    60% {
      transform: translateX(10px);
    }
    80% {
      transform: translateX(8px);
    }
    90% {
      transform: translateX(-8px);
    }
`



export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 25vh;

  h1 {
    font-weight: normal;
    font-size: 3rem;
    font-family: 'Poppins', sans-serif;
    display: flex;
    align-items: center;
  }

  svg{
    width: 25px;
    margin-left: 15px; 
    color: black;
  }

  button{
    background: #3e3e3e;
    color: white;
    padding: 12px;
    border: none;
    border-radius: 5px;
    :hover{
        animation: ${shake_horizontal} 4s infinite;
    }
  }
`;
