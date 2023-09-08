import React from 'react';
import Nav from '../Nav';
import BookingPage from '../Component/BookingPage';

function Reservations() {
  return (
    <div>
      <Nav> </Nav>
      <h1>Reservations Page</h1>
      {/* Add content for the home page */}
      <BookingPage />
    </div>
  );
}

export default Reservations;
