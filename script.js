/*
let js = "amazing";
if (js === "amazing") alert("Javascript is Fun!");

console.log(40 + 20 - 25);
*/

// DATA TYPES - NUMBER , BOOLEAN , STRING , UNDEFINED, NULL
// // typeof is a function which tell the type of the value
// true;
// console.log(true); // boolean
// let javaScriptIsFun = true; //boolean
// console.log(javaScriptIsFun);
// console.log(23); //Number
// console.log("Pooja"); //string

// console.log(typeof javaScriptIsFun);

// // Undefined
// let firstName;
// console.log(typeof firstName);

// // Dynamic typing -> chnaging the type of value

// javaScriptIsFun = "Yes!";
// console.log(typeof javaScriptIsFun);

// Let , Const and Var

/* let variable is mutable and Const variable is unmutable.

let age = 25;
age = 26;

const birthYear = 1997;
birthYear = 1998; // this will give error - "Assignment to constant variable"
*/

// OPERATORS  -> USING minus operator to calculate the age of person using birthyear.
// Formula -> variable name = current year - birthYear

// const now = 2023;
// const ageVishali = now - 1997;
// const ageKashish = now - 1998;
// console.log(ageVishali, ageKashish); // we can log multiple values and expressions

// console.log(ageKashish * 2, ageVishali / 10, 2 ** 3);
// // 2 ** 3 means 2 to the power of 3 -> 2 * 2* 2

//  + operator can be used for joining 2 strings or we can say concatination apart from addition

// const firstName = "Pooja";
// const lastName = "Yadav";
// console.log(firstName + " " + lastName);

// typeoff operator tells the type of the value

// ASSIGNMENT OPERATORS -> = , += , *= , ++ , --
// let x = 5 + 10;
// x += 10; // x = x + 10
// x *= 4; // x = x * 4
// x++; //  x = x + 1
// x--; // x = x - 1
// console.log(x);

// // COMPARISION OPERATOR

// console.log(ageKashish < ageVishali); // < , > , <= ,>=
// console.log(ageKashish >= 25);

// const isFullAge = ageKashish >= 25;

// console.log(now - 1997 > now - 1998);

// Coding Challenge 1

// Test Data 1

// let markWeight = 78;
// let markHeight = 1.69;
// let johnWeight = 92;
// let johnHeight = 1.95;

// const mark_BMI = markWeight / markHeight ** 2;
// const john_BMI = johnWeight / johnHeight ** 2;

// console.log(mark_BMI, john_BMI);

// let markHigherBMI = mark_BMI > john_BMI;
// console.log(markHigherBMI);

// Test Data 2
/*
let markWeight = 95;
let markHeight = 1.88;
let johnWeight = 85;
let johnHeight = 1.76;

const mark_BMI = markWeight / markHeight ** 2;
const john_BMI = johnWeight / johnHeight ** 2;

console.log(mark_BMI, john_BMI);

let markHigherBMI = mark_BMI > john_BMI;
console.log(markHigherBMI);
*/

// String And Template Literals

const firstName = "Pooja";
const job = "software Engineer";
const birthYear = 1997;
const currentYear = 2023;

const result =
  "I'm " +
  firstName +
  " , " +
  " a" +
  " " +
  (currentYear - birthYear) +
  " year old " +
  job;
console.log(result); // writing string this way is hectic instead of doing this we can use Template literals which is much more easier

// Template literals -> `` using back sticks we can write string . ${} -> place holders

const poojaNew = `I'm ${firstName}, a ${
  currentYear - birthYear
} year old ${job}!`;
console.log(poojaNew);

console.log(`Just a regular string...`);
console.log(
  "Multiple line \n\
string "
);

console.log(`Multiple line
strings
!`);
