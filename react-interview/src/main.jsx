import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import ConditionalRendering from "./ConditionalRendering";
import "./index.css";
// import App from "./ToDoList/App";
// import Users from "./hooks/ApiFetchUsinghooks";
// import Users from "./hooks/DeepuseRef5.jsx";
import Users from "./hooks/DeepuseContext.jsx";
// import App from './App.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <ConditionalRendering /> */}
    {/* <App /> */}
    <Users />
  </StrictMode>,
);
