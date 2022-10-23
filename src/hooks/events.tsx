import { createContext, useCallback, useContext, ReactNode, useState } from "react";
import api from "../services/api";

interface IEvents {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface EventsContextData {
  events: IEvents[];
  getEvents: () => void;
}

interface EventsProviderProps {
  children: ReactNode;
}

const EventsContext = createContext<EventsContextData>({} as EventsContextData);

const EventsProvider = ({ children }: EventsProviderProps) => {
  const [events, setEvents] = useState<IEvents[]>([]);
  const getEvents = useCallback(async () => {
    const response = await api.get("/events");
    setEvents([response.data]);
  }, [setEvents]);

  return (
    <EventsContext.Provider
      value={{
        events,
        getEvents,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
};

function useEvents(): EventsContextData {
  const context = useContext(EventsContext);

  if (!context) {
    throw new Error("useEvents must be used within an EventsProvider");
  }

  return context;
}

export { EventsProvider, useEvents };
