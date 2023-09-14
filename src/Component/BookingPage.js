import React from 'react';
import BookingForm from './BookingForm';

const BookingPage = ({ availableTimes }) => { // Receive availableTimes as a prop
  return (
    <div>
      <h2>Make a Reservation</h2>
      <p>Fill out the form below to book your table.</p>
      <BookingForm availableTimes={availableTimes} />
      {/* Additional content can be added here if needed */}
    </div>
  );
};

export default BookingPage;
