import React, { useState, useReducer } from 'react';

const BookingForm = ({ availableTimes }) => {
  const [reservationData, setReservationData] = useState({
    date: '',
    time: availableTimes[0], // Use the first available time as the default
    guests: '1',
    occasion: 'Birthday',
  });

  const bookingReducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_TIMES':
        const selectedDate = new Date(action.selectedDate);
        const startTime = new Date(selectedDate);
        startTime.setHours(17, 0); // Set the start time to 17:00
        const endTime = new Date(selectedDate);
        endTime.setHours(22, 0); // Set the end time to 22:00

        const filteredTimes = availableTimes.filter((time) => {
          const timeParts = time.split(':');
          const timeDate = new Date(selectedDate);
          timeDate.setHours(parseInt(timeParts[0], 10));
          timeDate.setMinutes(parseInt(timeParts[1], 10));
          return (
            !state.some((existingTime) => existingTime === time) && // Check if the time is not already booked
            timeDate >= startTime && timeDate <= endTime // Check if the time is within the range
          );
        });
        return filteredTimes;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(bookingReducer, availableTimes);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReservationData({
      ...reservationData,
      [name]: value,
    });

    if (name === 'date') {
      dispatch({ type: 'UPDATE_TIMES', selectedDate: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', reservationData);
  };

  return (
    <form
      style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}
      onSubmit={handleSubmit}
    >
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
        {state.map((time) => (
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
        <option>Get together</option>
      </select>
      <input type="submit" value="Make Your Reservation" />
    </form>
  );
};

export default BookingForm;
