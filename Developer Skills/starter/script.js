// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const x = "30";

// fundamentals of how java script works behind the scene
// Primitive Vs objects

//Primitive types
let lastName = "Williams";
let oldLastName = lastName;
lastName = "Davis";
console.log(lastName, oldLastName);

// objects

const Jessica = {
  lastName: "Williams",
  age: 27,
  family: ["Manish", "Mom", "dad"],
};

const Jessica2 = Jessica;
Jessica.lastName = "Davis";

// const JessicaAfterMarriage = {
//   lastName: "Davis",
//   age: 28,
// };

console.log("jessica:", Jessica);
console.log("Jessica2:", Jessica2);
const jessicaCopy = Object.assign({}, Jessica2);

jessicaCopy.lastName = "Williams";
jessicaCopy.family.push("dheeraj");
console.log(jessicaCopy);
