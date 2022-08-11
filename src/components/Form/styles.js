import styled from "styled-components";

export const FormStyle = styled.form`
    display: flex;
    justify-content: center;
    margin: 40px 0px 40px 0px;

    input {
        border: none;
        padding-left: 15px;
    }

    div {
        display: flex;
        align-items: center;
        padding: 12px;
        width: 400px;
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
    @media (max-width:900px) {
        flex-direction: column;

        button {
            margin-top: 5px;
            width: 150px;
            height: 4vh;
        }

    }

    @media (max-width: 724px) {
        flex-direction: column;
        align-items: center;

        div {
            height: 4vh;
            width: 95%;
        }

        button {
            margin-top: 5px;
            width: 150px;
            height: 4vh;
        }
    }

`;
