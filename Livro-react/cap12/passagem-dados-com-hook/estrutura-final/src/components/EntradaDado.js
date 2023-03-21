import React from "react";

const EntradaDado = ({ username, setUsername }) => {
  return (
    <input
      type="text"
      placeholder="Seu nome"
      defaultValue={username}
      onChange={(e) => setUsername(e.target.value)}
    />
  );
};

export default EntradaDado;
