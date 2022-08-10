import { ButtonStyle } from "./styles"

const Button = ({ children, functionClick }) => {
    return <ButtonStyle onClick={functionClick}>{children} </ButtonStyle>;
};

export default Button;
