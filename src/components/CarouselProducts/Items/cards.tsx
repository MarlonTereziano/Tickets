//Styles
import { Container, ContainerDescription } from "./styles";

//Antd
import {message} from "antd";

//React Hooks
import { useState, useEffect } from "react";

//import Api
import api from "../../../services/api";

//Interfaces
interface Props {
  numCard: number;
}

export function Card({ numCard }: Props) {
  const [eventTitle, setEventTitle] = useState("");
  const [eventImage, setEventImage] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventPlace, setEventPlace] = useState("");
  

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get("/events");
      setEventImage(response.data[numCard].image);
      setEventTitle(response.data[numCard].title);
      setEventDate(response.data[numCard].date);
      setEventPlace(response.data[numCard].place);
    };
    fetchData();
  }, []);

  return (
    <Container>
      <img src={eventImage} alt="Evento" />
      <ContainerDescription>
        <h3>{eventDate}</h3>
        <br />
        <h2 className="descriptionEvent">
          {eventTitle}
        </h2>
        <h4>{eventPlace}</h4>
        <br/>
        <button>Reservar</button>
      </ContainerDescription>
    </Container>
  );
}
