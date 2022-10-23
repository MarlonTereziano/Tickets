import { Header } from "../../components/header";
import { CarouselProducts } from "../../components/CarouselProducts";
import { ContainerEvents, Container, Footer } from "./styles";
export const HomePage = () => {

  return (
      <Container>
        <Header />
        <hr />
        <ContainerEvents>
          <h1>Eventos em destaque</h1>
          <CarouselProducts />
        </ContainerEvents>
        <ContainerEvents>
          <h1>Eventos em destaque</h1>
          <CarouselProducts />
        </ContainerEvents>
        <Footer>
          Todos os direitos reservados - Marlon Tereziano - 2022
        </Footer>
      </Container>
  );
};
