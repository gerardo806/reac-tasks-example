import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/App";
import { MainContextProvider } from "./context/MainContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainContextProvider>
      <App />
    </MainContextProvider>
  </React.StrictMode>
);
