import React, { useState, useEffect } from 'react';
import { fetchAPI,submitAPI } from '../api';

const BookingForm = () => {
  const [availableTimes, setAvailableTimes] = useState([]);
  const [reservationData, setReservationData] = useState({
    date: '',
    time: '',
    guests: '1',
    occasion: 'Birthday',
  });

  // Initialize available times for today's date
  const initializeTimes = async () => {
    try {
      const today = new Date();
      const formattedDate = today.toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
      const times = await fetchAPI(formattedDate);
      setAvailableTimes(times);
    } catch (error) {
      console.error('Error initializing available times:', error);
    }
  };

  useEffect(() => {
    initializeTimes(); // Call the initializeTimes function when the component mounts
  }, []);

  // Update available times when the date is changed
  const updateTimes = async (selectedDate) => {
    try {
      const times = await fetchAPI(selectedDate);
      setAvailableTimes(times);
    } catch (error) {
      console.error('Error updating available times:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReservationData({
      ...reservationData,
      [name]: value,
    });

    if (name === 'date') {
      updateTimes(value); // Call updateTimes when the date input changes
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const success = await submitAPI(reservationData);
      if (success) {
        console.log('Booking successful');
      } else {
        console.error('Booking failed');
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
    }
  };

  return (
    <form
      style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}
      onSubmit={handleSubmit}
    >
      {/* Your form inputs */}
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        name="date"
        value={reservationData.date}
        onChange={handleInputChange}
        required
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        name="time"
        value={reservationData.time}
        onChange={handleInputChange}
      >
        {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        name="guests"
        value={reservationData.guests}
        onChange={handleInputChange}
        required
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        name="occasion"
        value={reservationData.occasion}
        onChange={handleInputChange}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
        <option>Date</option>
        <option>Get-togethers</option>
      </select>
      <input type="submit" value="Make Your Reservation" />
    </form>
  );
};

export default BookingForm;
