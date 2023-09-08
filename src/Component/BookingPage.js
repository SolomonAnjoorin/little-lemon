// BookingPage.js
import React from 'react';
import BookingForm from './BookingForm'; // Assuming BookingForm is in the same directory

const BookingPage = () => {
  return (
    <div>
      <h2>Make a Reservation</h2>
      <p>Fill out the form below to book your table.</p>
      <BookingForm /> {/* Include the BookingForm component */}
      {/* Additional content can be added here if needed */}
    </div>
  );
};

export default BookingPage;
