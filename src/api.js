// api.js

// Simulated data for available times
const availableTimesData = {
    '2023-09-15': ['09:00', '11:00', '14:00', '16:00'],
    '2023-09-16': ['10:00', '13:00', '15:00', '17:00'],
    // Add more data for different dates as needed
  };
  
  // Simulated function to fetch available times for a given date
  export const fetchAPI = (date) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (availableTimesData[date]) {
          resolve(availableTimesData[date]);
        } else {
          reject(new Error('No available times for the selected date'));
        }
      }, 1000); // Simulate a delay for API response
    });
  };
  
  // Simulated function to submit booking data
  export const submitAPI = (formData) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate a successful submission for demonstration purposes
        const success = Math.random() < 0.8; // 80% success rate
        if (success) {
          resolve(true);
        } else {
          reject(new Error('Booking submission failed'));
        }
      }, 1000); // Simulate a delay for API response
    });
  };
  