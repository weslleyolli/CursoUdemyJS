import React from "react";
import logo from "./logo.svg";

function App() {
  return (
    <>
      <header className="topo">
        <h1 className="logo"></h1>
        <ul>
          <li>
            <a href="">Navegação</a>
          </li>
        </ul>
      </header>
      <main className="principal">
        <h2>Últimos Lançamentos</h2>
        <div className="card">Card</div>
      </main>
      <footer className="rodape">
        <p>Conteúdos cedidos pela Editora Novatec &#8212; Copyright 2020</p>
      </footer>
    </>
  );
}

export default App;
