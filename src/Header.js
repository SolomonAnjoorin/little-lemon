import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

function Header() {
  return (
    <header>
      <h1>Little Lemon</h1>
      <h2>Chicago</h2>
      <h3>
        We are a family-owned<br />
        Mediterranean restaurant,<br />
        focused on traditional<br />
        recipes served with a modern <br />
        twist. <br />
      </h3>
      {/* Use Link to navigate to the Reservations page */}
      <Link to="/reservations">
        <button className="button">Reserve a Table</button>
      </Link>
    </header>
  );
}

export default Header;
