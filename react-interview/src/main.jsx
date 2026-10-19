import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import ConditionalRendering from "./ConditionalRendering";
import "./index.css";
import App from "./ToDoList/App";
// import App from './App.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <ConditionalRendering /> */}
    <App />
  </StrictMode>,
);
