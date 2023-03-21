import React, { Component } from "react";
import Menu from "./components/Menu";
import TabelaLivros from "./components/TabelaLivros";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <TabelaLivros />
      </div>
    );
  }
}

export default App;
