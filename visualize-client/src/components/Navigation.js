import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom"; // Import useLocation
import { useNavigate } from "react-router-dom";
import nasaLogo from "../images/nasaLogo.png";
import "../styles/Navigation.css";

export default function Navigation({ setExpermentBackground }) {
  const location = useLocation();
  const navigate = useNavigate();

  // Update background based on the path inside Navigation
  useEffect(() => {
    if (location.pathname === "/experiments") {
      setExpermentBackground(true); // Set background for experiments
    } else {
      setExpermentBackground(false); // Reset background for other pages
    }
  }, [location.pathname, setExpermentBackground]);

  return (
    <nav className="navColumn">
      <img
        className="nasaLogo"
        src={nasaLogo}
        alt="NASA logo"
        onClick={() => navigate("/")}
      />
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
