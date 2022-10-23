import { Header } from "../../components/header";
import { CarouselProducts } from "../../components/CarouselProducts";
import { ContainerEvents, Container } from "./styles";
export const HomePage = () => {

  return (
    <>
      <Container>
        <Header />
        <hr />
        <ContainerEvents>
          <h1>Eventos em destaque</h1>
          <CarouselProducts />
        </ContainerEvents>
      </Container>
    </>
  );
};
