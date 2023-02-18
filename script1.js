"use strict";
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("you can drive...");

// Strict mode help us to avoid error

// Functions
//functions are basically piece of code that we can use over and over again in our Code.
function logger() {
  console.log("My name is Pooja");
}

//calling function
logger();
logger();

// Example of function - fruitProcessor

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges :D`;
  return juice;
}

//const juice = fruitProcessor(4, 3);
// console.log(juice);
console.log(fruitProcessor(4, 3));

//FUNCTION DECLARATION AND FUNCTION EXPRESSION
// Example to calculate Age.
// function declaration
function calcAge(birthYear) {
  const age = 2023 - birthYear;
  return age;
}

const age1 = calcAge(1995);
console.log(age1);

// function expression - single parameter
const calcAge2 = function (birthYear) {
  return 2023 - birthYear;
};
const Age2 = calcAge2(1998);
console.log(Age2);

// mutiple parameter
const calcAge3 = function (currentYear, birthYear) {
  const Age3 = currentYear - birthYear;
  return Age3;
};

console.log(calcAge3(2023, 2001));

//ARROW FUNCTION
const calcAge4 = (birthYear) => 2023 - birthYear;
const Age4 = calcAge4(1997);
console.log(Age4);

// example - how many years left in retirement
const yearUntilRetirement = (birthYear) => {
  const age = 2023 - birthYear;
  const retirement = 60 - age;
  return retirement;
};

console.log(yearUntilRetirement(1992));

// If we have mutiple parameters
const yearUntilRetirement1 = (birthYear, firstName) => {
  const Age5 = 2023 - birthYear;
  const retirement = 60 - Age5;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearUntilRetirement1(1980, "bob"));

// FUNCTION CALLING OTHER FUNCTION
function fruitCutting(fruit) {
  return fruit * 4;
}

function fruitProcessor1(apple, orange) {
  const appleJuice = fruitCutting(apple);
  const orangeJuice = fruitCutting(orange);
  const juice1 = `juice with ${appleJuice} pieces of apple, and ${orangeJuice} pieces of orange`;
  return juice1;
}

console.log(fruitProcessor1(5, 6));

// REVIEWING FUNCTION
