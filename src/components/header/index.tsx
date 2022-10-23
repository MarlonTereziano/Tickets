import { Container, AreaButtons } from "./styles";
import logo from "../../assets/images/logo.png";

export const Header = () => {
  return (
    <Container>
      <img src={logo} alt="Logo MB.Tickets" />
      <AreaButtons>
        <button>Cadastre-se</button>
        <button>Login</button>
      </AreaButtons>
    </Container>
  );
};
