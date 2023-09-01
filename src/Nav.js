import React from 'react';
import logo from './Llittel Lemon Logo .svg'; // Import the logo image
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <img src={logo} alt="Logo" className="logo" /> {/* Add the logo image */}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/reservations">Reservations</Link>
        </li>
        <li>
          <Link to="/orderonline">Order Online</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
