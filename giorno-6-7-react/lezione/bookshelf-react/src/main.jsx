// Punto di partenza: prende il div#root di index.html e ci disegna il componente App.
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  // StrictMode: in sviluppo esegue alcune cose due volte per scoprire errori.
  // Per questo un console.log dentro un componente può comparire doppio.
  <StrictMode>
    <App />
  </StrictMode>,
);
