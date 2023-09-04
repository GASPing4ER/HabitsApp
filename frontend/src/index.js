import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HabitsContextProvider } from "./context/HabitsContext";
import { AuthContextProvider } from "./context/AuthContext";
import { DateContextProvider } from "./context/DateContext";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <HabitsContextProvider>
        <DateContextProvider>
          <App />
        </DateContextProvider>
      </HabitsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);