import { useState } from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./Navbar.css";

function Navbar() {

  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <nav className="navbar">

      <div className="navbar-container">

        <h1 className="navbar-logo">Flow de Futbol</h1>

        <button
          className="menu-button"
          onClick={() => setMenuAbierto(!menuAbierto)}
        >
          {menuAbierto ? "✕" : "☰"}
        </button>

        <ul className={`navbar-menu ${menuAbierto ? "menu-abierto" : ""}`}>

          <li>
            <NavLink to="/">Inicio</NavLink>
          </li>

          <li>
            <NavLink to="/catalogo">Catálogo</NavLink>
          </li>

          <li>
            <CartWidget />
          </li>

        </ul>

      </div>

    </nav>
  );
}

export default Navbar;