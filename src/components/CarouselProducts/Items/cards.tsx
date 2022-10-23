//Styles
import { Container } from "./styles";

import { useEvents } from "../../../hooks/events";

//Interfaces
interface Props {
  numCard: number;
}

export function Card({ numCard }: Props) {
  const { getEvents, events } = useEvents();

  const listEvents = () => {
    console.log("entrou");
    getEvents();
    console.log(events[0]);
  };

  return (
    <>
      <Container></Container>
      <button onClick={listEvents}>aaaaaaaaaaaaa</button>
    </>
  );
}
