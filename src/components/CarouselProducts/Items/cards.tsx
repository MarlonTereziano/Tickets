//Styles
import { Container, ContainerDescription } from "./styles";

//Hooks
// import { useEvents } from "../../../hooks/events";

//React Hooks
import { useState, useEffect } from "react";

//import Api
import api from "../../../services/api";

//Interfaces
interface Props {
  numCard: number;
}

export function Card({ numCard }: Props) {
  const [event, setEvent] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get("/events");
      setEvent(response.data[numCard].image);
    };
    fetchData();
    console.log(event);
  }, [event, numCard]);

  return (
    <Container>
      <img src={event} alt="Evento" />
      <ContainerDescription>
        <h3>SAB, 12 NOV - 16:00</h3>
        <br />
        <h2 className="descriptionEvent">
          Festival MPBoca 2022 | Liniker, Johnny Hooker, Céu, Tulipa Ruiz e
          muito mais!
        </h2>
        <h4>Local</h4>
        <br/>
        <button>VER DETALHES</button>
      </ContainerDescription>
    </Container>
  );
}
