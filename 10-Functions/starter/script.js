'use strict';

const bookings = [];
const createBooking = function (flightNum, numPassengers, price) {
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
};
//[('jonas', 'Martha', 'Adam')].forEach(high5);

//functions returning functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name} `);
  };
};

const greeterHey = greet('Hey');
greeterHey('Pooja');
greeterHey('Kajal');
greeterHey('karry');

greet('Hey')('Manish');

//Challenge
const greetArr = greeting => name => console.log(`${greeting} ${name} `);
greetArr('Hi')('Manish');

//the call and apply methods
const lufthansa = {
  airline: 'lufthansa',
  iataCode: 'LH',
  bookings: [],
  //book :function(){}
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline} flight ${flightNum}`);

    this.bookings.push({ flight: `${this.iataCode}  ${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'Jhon Smith');
console.log(lufthansa);

const eurowing = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

//book(23, 'Sarah Williams');
// we will get error because this keyword points to undefined when called from regular function
// how we will tell this keyword that we want to book  eurowings flight or lufthansa flight
// there are 3 methods call, appy and bind

//Call Method
book.call(eurowing, 23, 'Sarah Williams');
console.log(eurowing);

book.call(lufthansa, 25, 'Jonas Schmedtmann');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Airline',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 453, 'George Cooper');
console.log(swiss);

// Apply Method
// the only difference in apply method is that it takes an array as an argument

const flightData = [583, 'Marry Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

// Bind method - same as call and apply bind method as allows us to manually set the this keyword for any function call
//the diffrence is that the bind does not immediaely call the function instaed it returns a new function where the this keyword is bound
//so its set to whatever value we pass to bind

//book.call(eurowing, 23, 'Sarah Williams');

const bookEW = book.bind(eurowing);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(234, 'Steven Williams');

const bookEW23 = book.bind(eurowing, 23); // we can even preset the values
bookEW23('Pooja Yadav');
bookEW23('Jonas schmedtmann');

// With Event Listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

// lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value+value*0.23

console.log(addVAT(200));
console.log(addVAT(45));

// Challenge

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT(200));
console.log(addVAT(45));

// Challenge
const pool = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1:Python', '2: Rust', '3: C++'],

  // This generates [0,0,0,0] .
  answer: new Array(4).fill(0),
};

// IIFE -> Immediately invoked function expression
// means calling the function only once and not again

(function () {
  console.log('this will never run again ');
})();

(() => console.log('This will Also never run Again '))();
