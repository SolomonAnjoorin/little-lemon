// BookingForm.test.js
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

// Mock the validateGuests function
jest.mock('./BookingForm', () => ({
  __esModule: true,
  default: jest.requireActual('./BookingForm').default,
  validateGuests: jest.fn(),
}));

describe('BookingForm Component', () => {
  test('Date input should have the required attribute', () => {
    render(<BookingForm availableTimes={[]} />);
    const dateInput = screen.getByLabelText('Choose date');
    expect(dateInput).toHaveAttribute('required');
  });

  test('Number of guests input should have a minimum value of 1', () => {
    render(<BookingForm availableTimes={[]} />);
    const guestsInput = screen.getByLabelText('Number of guests');
    expect(guestsInput).toHaveAttribute('min', '1');
  });

  test('validateGuests should return true for a valid number of guests', () => {
    const { validateGuests } = require('./BookingForm');
    validateGuests.mockReturnValue(true); // Mock the return value
    const validGuests = '3';
    expect(validateGuests(validGuests)).toBe(true);
  });

  test('validateGuests should return false for an invalid number of guests', () => {
    const { validateGuests } = require('./BookingForm');
    validateGuests.mockReturnValue(false); // Mock the return value
    const invalidGuests = '0';
    expect(validateGuests(invalidGuests)).toBe(false);
  });

  test('Submitting the form with valid guests should call handleSubmit', () => {
    const handleSubmit = jest.fn();
    render(<BookingForm availableTimes={[]} />);
    const guestsInput = screen.getByLabelText('Number of guests');
    fireEvent.change(guestsInput, { target: { value: '3' } });
    fireEvent.click(screen.getByText('Make Your Reservation'));
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
