import { Container, AreaButtons } from "./styles";
import logo from "../../assets/images/logo.png";

export const Header = () => {
  return (
    <Container>
      <a href="/">
        <img src={logo} alt="Logo MB.Tickets" />
      </a>
      <AreaButtons>
        <button className="signIn">Login</button>
        <button className="signUp">Cadastre-se</button>
      </AreaButtons>
    </Container>
  );
};
