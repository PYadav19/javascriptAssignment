'use strict';

const bookings = [];
const createBooking = function (flightNum, numPassenger, price) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('lh123', 2, 800);
createBooking('LH123', 2);
