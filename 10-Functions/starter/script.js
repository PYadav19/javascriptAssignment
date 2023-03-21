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

//

const flight = 'LH234';
const jonas = {
  name: 'Jonas',
  passport: 235784994764,
};

const checkIn = function (flightNumber, passenger) {
  flightNumber = 'LH564';
  passenger.name = 'MR.' + passenger.name;

  if (passenger.passport === 235784994764) {
    alert('Checked In');
  } else {
    alert('Wrong Passport');
  }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(jonas);
checkIn(flight, jonas);

// first class  vs higher order functions

const oneWord = function (str) {
  return str.replaceAll('').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher Order Function

const transformer = function (str, fn) {
  console.log(`Original String : ${str}`);
  console.log(`Transformed string : ${fn(str)}`);

  console.log(`Transformed By : ${fn.name}`);
};

transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);

const high5 = function () {
  console.log('');
}[('jonas', 'Martha', 'Adam')].forEach(high5);
