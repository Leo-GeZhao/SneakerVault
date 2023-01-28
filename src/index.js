import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

//Components
import App from "./App";

import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
