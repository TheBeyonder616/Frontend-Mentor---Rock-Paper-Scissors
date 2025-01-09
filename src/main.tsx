import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./sass/style.scss";
import { GameProvider } from "./component/context.tsx";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GameProvider>
      <App />
    </GameProvider>
  </StrictMode>
);
