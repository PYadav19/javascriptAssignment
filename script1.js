"use strict";
/*
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

const calcAge = function (birthYear) {
  return 2023 - birthYear;
};

const yearUntilRetirement_1 = function (birthYear) {
  const age_1 = calcAge(birthYear);
  const retirement_1 = 60 - age_1;
  if (retirement_1 > 0) {
    return retirement_1;
  } else {
    return -1;
  }
};

console.log(yearUntilRetirement_1(1997));
console.log(yearUntilRetirement_1(1950));

// FUNCTION CODING CHALLENGE

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// Test case 1
const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);
console.log(avgDolphins, avgKoalas);

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`dolphins win (${avgDolphins} VS ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`dolphins win (${avgKoalas} VS ${avgDolphins})`);
  } else {
    console.log("No  team wins...");
  }
};

checkWinner(avgDolphins, avgKoalas);

// Test case 2
const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);
checkWinner(scoreDolphins, scoreKoalas);


// DATA STRUCTURE -> ARRAYS
const friends = ["Karry", "Kajal", "Dheeraj", "Kashish", "Ankita", "Tabassum"];
console.log(friends);

const years = new Array(1997, 1987, 2020, 2023, 1995);

console.log(friends[0]);
console.log(years[3]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

// we can add and remove the value from an array

friends[3] = "Manish";
friends[friends.length - 1] = "Vishali";
console.log(friends);

// we can store diffrent type of value in array , we can even
// put expressions and another array as well

const pooja = ["Pooja", "Yadav", 2022 - 1999, "teacher", friends];
console.log(pooja);

// Exercise
// calculate the age

const calc_age = function (birth_year) {
  return 2023 - birth_year;
};

const year = [1980, 1972, 2002, 2010, 2020];
const age1 = calc_age(year[0]);
const age2 = calc_age(year[1]);
const age3 = calc_age(year[2]);
const age4 = calc_age(year[3]);
console.log(age1, age2, age3, age4);

const ages = [
  calc_age(year[0]),
  calc_age(year[1]),
  calc_age(year[2]),
  calc_age(year[3]),
];
console.log(ages);


// BASIC ARRAY OPERATIONS (METHODS)

const clzFriends = ["Rohan", "Vishali", "Kashish", "Rahul", "Shivam"];

//Add elements

clzFriends.push("Suhani"); // it adds the emlemet in the last

//Push is a function which return length of the array
const newLength = clzFriends.push("prahlad");
console.log(clzFriends);
console.log(newLength);

clzFriends.unshift("Ravina"); // first
console.log(clzFriends);

//Remove elements
//pop function return the popped elements
const popped = clzFriends.pop(); //last
console.log(clzFriends);
console.log(popped);

clzFriends.shift(); //first
console.log(clzFriends);

//indexof function return in which index value is stored
console.log(clzFriends.indexOf("Suhani"));
console.log(clzFriends.indexOf("BOb"));

// inculdes return boolean value means if the value exist in array or not.
console.log(clzFriends.includes("Rohan"));
console.log(clzFriends.includes("Robert"));

if (clzFriends.includes("Rahul")) {
  console.log("Rahul is your college friend:D");
}


//Array coding challenge
const calcTip = function (Bill) {
  return Bill >= 50 && Bill <= 300 ? Bill * 0.15 : Bill * 0.2;
};

const bills = [125, 555, 44];

let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);

//Bonus
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totals);

// Introduction to objects

const PoojaArray = [
  "Pooja",
  "Yadav",
  2022 - 1999,
  "Teacher",
  ["kajal", "karry", "jyoti"],
];

// object
const Nishu = {
  firstName: "Nishu",
  lastName: "Yadav",
  Age: 2022 - 1999,
  Job: "Teacher",
  friends: ["kajal", "karry", "jyoti"],
};

// keys is also called property , object are most fundamental way , there are mutiple ways of creating object , above one is called
//literal object
//in object order of value does not matter when retriving the value as in array we can retrive value only by using index no.

// how to get data from an Object  - dot and bracket notation

console.log(Nishu.firstName); //dot notation
console.log(Nishu["lastName"]); // bracket notation

const nameKey = "Name";
console.log(Nishu["first" + nameKey]);
console.log(Nishu["last" + nameKey]);

const interestedIn = prompt(
  "what do you want to know about Nishu? Choose between fisrtName , LastName , age, job, and friends"
);
//console.log(Nishu.interestedIn); // undefined becaus there is no property as interestedIn.
//console.log(Nishu[interestedIn]);

if (Nishu[interestedIn]) {
  console.log(Nishu[interestedIn]);
} else {
  console.log("Wrong request!");
}

// Add new properties using dot and bracket noation
Nishu.location = "Sangrur";
Nishu["twitter"] = "@poojayadav";
console.log(Nishu);

//challenge
//"Jonas has 3 friends , and his best friend is called Michael"

console.log(
  `${Nishu.firstName} has ${Nishu.friends.length} and her best friend is called ${Nishu.friends[0]}`
);



// OBJECT METHODS

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriverLicense: true,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} - years old ${
      this.job
    }, and he has ${this.hasDriverLicense ? "a" : "no"}  driver's license `;
  },
};

//console.log(jonas.calcAge(1991)); //dot
//console.log(jonas["calcAge"](1991)); //bracket

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// challenge
// "jonas is a 46 - years old Teacher, and he has a  driver's license"

console.log(jonas.getSummary());

// Coding challenge

const markMiller = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const johnSmith = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

markMiller.calcBMI();
johnSmith.calcBMI();
console.log(johnSmith.BMI);
console.log(markMiller.BMI);

if (markMiller.BMI > johnSmith.BMI) {
  console.log(
    `${markMiller.firstName} ${markMiller.lastName}'s BMI (${markMiller.BMI}) is higher than ${johnSmith.firstName}  ${johnSmith.lastName}'s BMI (${johnSmith.BMI})`
  );
} else {
  console.log(
    `${johnSmith.firstName} ${johnSmith.lastName}'s BMI (${johnSmith.BMI}) is higher than ${markMiller.firstName}  ${markMiller.lastName}'s BMI (${markMiller.BMI})`
  );
}

//iteration : for loop

// for loop keeps running wjile condition is true

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

*/
// arrays , breaking and continuing

const jonas = [
  "jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

// for (let i = 0; i < 5; i++) {
//   console.log(jonas[i]);
// }

const types = [];

// for (let i = 0; i < jonas.length; i++) {
//   // Reading from jonas array

//   //console.log(jonas[i]);
//   console.log(jonas[i], typeof jonas[i]);

//   //Filling types array
//   //types[i] = typeof jonas[i];
//   types.push(typeof jonas[i]);
// }

// console.log(types);

const years = [1991, 2007, 1997, 2022];
const age = [];

for (let i = 0; i < years.length; i++) {
  let age = 2023 - years[i];
  age[i] = years[i];
}
