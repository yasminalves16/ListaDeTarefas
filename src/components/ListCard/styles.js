import styled from "styled-components";

export const Container = styled.li`
    background-color: var(--white);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 250px;
    height: 230px;
    padding: 16px;
    margin: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
    border: 1 px solid var(--black);
    color: var(--black);
    overflow-wrap: break-word;
    word-wrap: break-word;
    overflow: auto;
    font-size: 1.2em;

    label {
        width: 80%;
    }

    hr {
        width: 80%;
        margin-top: 16px;
        margin-bottom: 16px;
    }
    svg {
        font-size: 1.1rem;
        margin: 5px;
    }

    div {
        display: flex;
        flex-direction: column;
        margin-top: 15px;
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 5px;
        background-color: #3e3e3e;
        color: white;
        border: 1px solid #3e3e3e;
        border-radius: 5px;
        :hover {
            background-color: #737373;
        }
    }
`;

export const LiEdit = styled.li`
    display: flex;
    align-items: center;

    input {
        border: 2px solid black;
        padding: 3px;
        margin: 10px 10px 10px -20px;
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 5px;
        background-color: #3e3e3e;
        color: white;
        border: 1px solid #3e3e3e;
        border-radius: 5px;
        padding: 4px;
        :hover {
            background-color: #737373;
        }
    }

    @media (max-width: 400px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const Container2 = styled.li`
    background-color: var(--white);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 250px;
    height: 230px;
    padding: 16px;
    margin: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
    border: 1 px solid var(--black);
    color: var(--black);
    overflow-wrap: break-word;
    word-wrap: break-word;
    overflow: auto;
    font-size: 1.2em;

    label {
        width: 80%;
        color: black;
        text-decoration: line-through grey;
        font-style: italic;
        font-weight: bold;
    }

    hr {
        width: 80%;
        margin-top: 16px;
        margin-bottom: 16px;
    }
    svg {
        font-size: 1.3rem;
        margin: 5px;
    }
`;
