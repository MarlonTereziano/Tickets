import { ReactNode } from "react";
import { AuthProvider } from "./auth";
import {EventsProvider} from './events';

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <AuthProvider>
      <EventsProvider>{children}</EventsProvider>
    </AuthProvider>
  );
};

export default AppProvider;
