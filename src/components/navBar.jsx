import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink to="/" className="navbar-brand">
        Vidly App
      </NavLink>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <NavLink to="/movies" className="nav-link">
            Movies
          </NavLink>
          <NavLink to="/customers" className="nav-link">
            Customers
          </NavLink>
          <NavLink to="/rental" className="nav-link">
            Rental
          </NavLink>
          <NavLink to="/login" className="nav-link">
            Login
          </NavLink>
          <NavLink to="/register" className="nav-link">
            Register
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
