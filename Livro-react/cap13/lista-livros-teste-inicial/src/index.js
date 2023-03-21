import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ListaLivros from "./ListaLivros";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <ListaLivros />
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
