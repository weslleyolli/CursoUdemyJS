import React from "react";

const TabelaFoot = (props) => (
  <tfoot>
    <tr>
      <td colSpan="4">Quantidade de livros na tabela: {props.qdeLivros}</td>
    </tr>
  </tfoot>
);

export default TabelaFoot;
