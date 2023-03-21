import "./App.css";
import { useState } from "react";

function App() {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  document.title = `Título: ${nome}`;
  console.log("Página renderizada");
  return (
    <div className="App">
      <h1>UseEffect</h1>
      <input
        type="text"
        placeholder="Nome"
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        onChange={(e) => setSenha(e.target.value)}
      />
      <p>
        Nome: <span>{nome}</span>
      </p>
      <p>
        Senha: <span>{senha}</span>
      </p>
    </div>
  );
}

export default App;
