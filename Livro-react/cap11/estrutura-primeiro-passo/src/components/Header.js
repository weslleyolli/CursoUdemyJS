import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <nav className="menu">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cadastrar">Cadastrar</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <button
            className="btnLink"
            onClick={(event) => {
              event.preventDefault();
            }}
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
