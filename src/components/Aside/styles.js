import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 60vw;
    margin: 50px;

    @media (max-width: 1154px) {
        flex-direction: column;
        justify-content: center;

        section {
            display: flex;
            justify-content: center;
            margin-bottom: 50px;
        }
    }
`;

export const Form = styled.form`
    display: flex;

    input {
        border: none;
        padding-left: 15px;
    }

    div {
        display: flex;
        align-items: center;
        width: 320px;
        background-color: white;
        border: 2px solid black;
        border-radius: 3px;

        svg {
            width: 20px;
            height: 20px;
        }
    }

    button {
        margin-left: 15px;
        padding: 0px 10px 0px 10px;
        background-color: #3e3e3e;
        color: white;
        border: 1px solid #3e3e3e;
        border-radius: 5px;

        :hover {
            background-color: #737373;
        }
    }

    @media (max-width: 400px) {
        justify-content: center;

        div {
            width: 270px;
            padding: 0px;
            height: 4vh;
        }

        input {
            padding-left: 1px;
        }

        button {
            margin-left: 2px;
        }
    }

    @media (max-width: 1154px) {
        justify-content: center;
    }
`;
