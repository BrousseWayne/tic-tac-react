import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BOARD_COL_SIZE } from "./utils/constants.ts";

document.documentElement.style.setProperty(
  "--board-division",
  `${BOARD_COL_SIZE}`
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
