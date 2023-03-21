import React from "react";
const TabelaLivros = () => {
  return (
    <div className="livros">
      <h1>Tabela de livros</h1>
      <table className="tabela">
        <thead>
          <tr>
            <th width="17%">ISBN</th>
            <th>Título</th>
            <th>Autor</th>
            <th width="7%"></th>
            <th width="9%"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ISBN do livro</td>
            <td>Título do livro</td>
            <td>Autor do livro</td>
            <td>
              <button className="botao editar">Editar</button>
            </td>
            <td>
              <button className="botao remover">Remover</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TabelaLivros;
