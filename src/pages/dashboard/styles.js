import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    height: 100vh;
    align-items: center;
    margin-top: 50px;
`;

export const Header = styled.header`
    h1 {
        font-size: 2.5rem;
        font-family: "Poppins", sans-serif;
    }
`;

export const Main = styled.main`
    width: 60vw;
    border: 2px solid grey;
    border-radius: 5px;

    p {
        font-size: 20px;
        text-align: center;
        margin-top: 15px;
    }
`;
