import styled from "styled-components";

export const Container = styled.section`
    ul {
        list-style-type: none;
        display: flex;
        flex-wrap: wrap;
        padding: 40px;
        transition: 1s;
    }

    figure {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;

        figCaption {
            margin: 50px;
            font-weight: bold;
        }

        img {
            border-radius: 50%;
            box-shadow: 0 0 0 20px rgba(255, 255, 255, 0.5);
            width: 25vw;
        }
    }
    
    @media (max-width: 600px) {
        figCaption {
            margin-bottom: 10px;
        }
        
        img {
            width: 50vw;
        }
    }
`;
