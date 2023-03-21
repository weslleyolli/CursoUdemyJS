import React, { useState } from "react";

const TemperatureConverter = () => {
  let [temperature, setTemperature] = useState("");
  const handleTemperature = (valorTecla) => {
    setTemperature(temperature + valorTecla);
  };

  return (
    <>
      <aside className="areaResultado">
        <input id="user-temp" defaultValue={temperature} />
        <select id="user-choice">
          <option value="C">Celsius</option>
          <option value="F">Fahrenheit</option>
          <option value="K">Kelvin</option>
        </select>
        <div className="result" id="celsius-temp">
          &nbsp;
        </div>
        <span>
          <sup>o</sup>C
        </span>
        <div className="result" id="fahrenheit-temp">
          &nbsp;
        </div>
        <span>
          <sup>o</sup>F
        </span>
        <div className="result" id="kelvin-temp">
          &nbsp;
        </div>
        <span>
          <sup>o</sup>K
        </span>
        <button className="tecla" id="converter">
          Converter
        </button>
      </aside>
      <aside className="areaTeclas">
        <button className="n1 tecla" onClick={() => handleTemperature("1")}>
          1
        </button>
        <button className="n2 tecla" onClick={() => handleTemperature("2")}>
          2
        </button>
        <button className="n3 tecla" onClick={() => handleTemperature("3")}>
          3
        </button>
        <button className="n4 tecla" onClick={() => handleTemperature("4")}>
          4
        </button>
        <button className="n5 tecla" onClick={() => handleTemperature("5")}>
          5
        </button>
        <button className="n6 tecla" onClick={() => handleTemperature("6")}>
          6
        </button>
        <button className="n7 tecla" onClick={() => handleTemperature("7")}>
          7
        </button>
        <button className="n8 tecla" onClick={() => handleTemperature("8")}>
          8
        </button>
        <button className="n9 tecla" onClick={() => handleTemperature("9")}>
          9
        </button>
        <button className="n0 tecla" onClick={() => handleTemperature("0")}>
          0
        </button>
        <button
          className="virgula tecla"
          onClick={() => handleTemperature(".")}
        >
          ,
        </button>
        <button className="limpa tecla"></button>
        <button
          className="negativo tecla"
          onClick={() => handleTemperature("-")}
        >
          -
        </button>
        <div className="reset tecla">Nova conversão</div>
      </aside>
    </>
  );
};

export default TemperatureConverter;
