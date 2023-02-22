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

/*

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

// Coding challenge 2

// let markWeight = 78;
// let markHeight = 1.69;
// let johnWeight = 92;
// let johnHeight = 1.95;

let markWeight = 95;
let markHeight = 1.88;
let johnWeight = 85;
let johnHeight = 1.76;

const mark_BMI = markWeight / markHeight ** 2;
const john_BMI = johnWeight / johnHeight ** 2;

console.log(mark_BMI, john_BMI);

let markHigherBMI = mark_BMI > john_BMI;
console.log(markHigherBMI);

if (mark_BMI > john_BMI) {
  console.log("Mark's BMI is Higher than John's");
} else {
  console.log("John's BMI is Higher than Mark's");
}

// Using template literals
if (mark_BMI > john_BMI) {
  console.log(
    `Mark's BMI (${mark_BMI}) is higher than John's BMI ${john_BMI} `
  );
} else {
  console.log(
    `John's BMI (${john_BMI}) is higher than Mark's BMI ${mark_BMI} `
  );
}

// Coding challenge #3

let dolphin_Match1_Score = 70;
let dolphin_Match2_Score = 100;
let dolphin_Match3_score = 86;

const dolphin_Avg =
  (dolphin_Match1_Score + dolphin_Match2_Score + dolphin_Match3_score) / 3;
console.log(dolphin_Avg);

let koalas_Match1_Score = 96;
let koalas_Match2_Score = 108;
let koalas_Match3_score = 86;

const koalas_Avg =
  (koalas_Match1_Score + koalas_Match2_Score + koalas_Match3_score) / 3;
console.log(koalas_Avg);

if (dolphin_Avg > koalas_Avg) {
  console.log("Dolphin is the winner of the Match");
} else if (dolphin_Avg === koalas_Avg) {
  console.log("Draw....!!");
} else {
  console.log("Koalas is the winner of the Match");
}

// Bonus1

let dolphin_Match1Score = 97;
let dolphin_Match2Score = 112;
let dolphin_Match3score = 101;

const dolphinAvg =
  (dolphin_Match1_Score + dolphin_Match2_Score + dolphin_Match3_score) / 3;
console.log(dolphin_Avg);

let koalas_Match1Score = 109;
let koalas_Match2Score = 95;
let koalas_Match3score = 106;

const koalasAvg =
  (koalas_Match1_Score + koalas_Match2_Score + koalas_Match3_score) / 3;
console.log(koalas_Avg);

const minimum_score = 100;
if (dolphin_Avg > koalas_Avg && dolphin_Avg >= minimum_score) {
  console.log("Dolphin is the winner of the Match");
} else if (koalas_Avg > dolphin_Avg && koalas_Avg >= minimum_score) {
  console.log("Koalas is the winner of the Match");
} else if (
  dolphin_Avg === koalas_Avg &&
  dolphin_Avg >= minimum_score &&
  koalas_Avg >= minimum_score
) {
  console.log("Draw....!!");
} else {
  console.log("No Team wins the trophy");
}

//Coding chanllenge #4  - Tip calculator
let tip;
let totalBill;
let stevenBill = 275;
if (stevenBill >= 50 && stevenBill <= 300) {
  tip = 0.15;
  totalTip = tip * stevenBill;
  console.log(
    `The Bill was ${stevenBill}, the tip was ${totalTip}, The total Bill value ${
      stevenBill + totalTip
    }`
  );
} else {
  tip = 0.2;
  totalTip = tip * stevenBill;
  console.log(
    `The Bill was ${stevenBill}, the tip was ${totalTip}, The total Bill value ${
      stevenBill + totalTip
    }`
  );
}

// ternary operator
tip =
  stevenBill >= 50 && stevenBill <= 300 ? stevenBill * 0.15 : stevenBill * 0.2;
console.log(
  `The Bill was ${stevenBill}, the tip was ${tip} and the bill Value is ${
    stevenBill + tip
  }`
);

*/
