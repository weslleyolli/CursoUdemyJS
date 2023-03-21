import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <>
    <h1>404!</h1>
    <p>
      Lamento. Essa página não existe ou foi removida <br />
      <Link to="/">Votar para Tabela de livros</Link>
    </p>
  </>
);

export default NotFound;
