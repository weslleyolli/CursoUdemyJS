import React, { Component } from "react";

class CadastrarLivros extends Component {
  render() {
    return (
      <form>
        <h1>Cadastrar livro</h1>
        <p>
          <label htmlFor="fisbn">
            ISBN: Formato - (
            <span style={{ color: "red" }}> 978-85-7522-xxx-x </span>)
          </label>
          <input
            type="text"
            autoFocus
            id="fisbn"
            required
            pattern="^978-85-7522-[0-9]{3}-[0-9]{1}$"
          />
        </p>
        <p>
          <label htmlFor="ftitulo">Título</label>
          <input type="text" id="ftitulo" required />
        </p>
        <p>
          <label htmlFor="fautor">Autor</label>
          <input type="text" id="fautor" required />
        </p>
        <p>
          <button type="submit" className="botao cadastrar">
            Cadastrar
          </button>
        </p>
      </form>
    );
  }
}

export default CadastrarLivros;
