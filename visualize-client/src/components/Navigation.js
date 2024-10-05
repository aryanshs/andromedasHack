import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink
import nasaLogo from "../images/nasaLogo.png";
import "../styles/Navigation.css";

export default function Navigation() {
  return (
    <nav className="navColumn">
      <img className="nasaLogo" src={nasaLogo} alt="NASA logo" />
      <ul className="navLinks">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/experiments"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Experiments
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
