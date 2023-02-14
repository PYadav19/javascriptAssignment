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

const now = 2023;
const ageVishali = now - 1997;
const ageKashish = now - 1998;
console.log(ageVishali, ageKashish); // we can log multiple values and expressions

console.log(ageKashish * 2, ageVishali / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 -> 2 * 2* 2

//  + operator can be used for joining 2 strings or we can say concatination apart from addition

const firstName = "Pooja";
const lastName = "Yadav";
console.log(firstName + " " + lastName);

// typeoff operator tells the type of the value

// ASSIGNMENT OPERATORS -> = , += , *= , ++ , --
let x = 5 + 10;
x += 10; // x = x + 10
x *= 4; // x = x * 4
x++; //  x = x + 1
x--; // x = x - 1
console.log(x);

// COMPARISION OPERATOR

console.log(ageKashish < ageVishali); // < , > , <= ,>=
console.log(ageKashish >= 25);

const isFullAge = ageKashish >= 25;

console.log(now - 1997 > now - 1998);
