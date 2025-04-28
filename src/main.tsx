import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import SearchModalContext from "./context/SearchModalContext.tsx";
import "./index.css";

// Renderizando o aplicativo
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SearchModalContext>
      <App />
    </SearchModalContext>
  </StrictMode>
);
