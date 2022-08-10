import img from "../../utils/home.gif";
import { Container, Figure, Section } from "./styles";
import { useHistory } from "react-router-dom";
import { FaRegEdit} from "react-icons/fa";

const Home = () => {
  const history = useHistory();

  return (
    <Container>
      <Figure>
        <img src={img} alt="Gif animado com tarefas concluidas com check" />
      </Figure>
      <Section>
        <h1>
          Lista de Tarefas <FaRegEdit />
        </h1>
        <button onClick={() => history.push("/Dashboard")}> Clique aqui </button>
      </Section>
    </Container>
  );
};

export default Home;
