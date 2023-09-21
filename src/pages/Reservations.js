import React, { useState } from 'react';
import Nav from '../Nav';
import BookingPage from '../Component/BookingPage';
import Footer from '../Footer';

function Reservations() {
  // Move the availableTimes state to the Reservations component
  const [availableTimes] = useState([
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ]);

  return (
    <div>
      <Nav></Nav>
      <h1>Reservations Page</h1>
      {/* Pass down the availableTimes state as a prop to BookingPage */}
      <BookingPage availableTimes={availableTimes} />
      {/* Render other components or content */}
      <Footer></Footer>
    </div>
  );
}

export default Reservations;
