'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];
/*
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const calcDisplaySummary = function (movements) {
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}EUR`;

  const out = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}`;

  const interest = movements
    .filter(mov => mov > 0)
    .map(deposite => (deposite * 1.2) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}EUR`;
};

calcDisplaySummary(account1.movements);
const createUserNames = function (user) {
  const userName = user
    .toLowerCase()
    .split(' ')
    .map(word => word[0])
    .join('');
  return userName;
};

console.log(createUserNames('Steven Thomas Williams'));
*/

// let userName = 'Steven Thomas Williams';
// const Name = userName
//   .toLowerCase()
//   .split(' ')
//   .map(function (word) {
//     return word[0];
//   })
//   .join('');
// console.log(Name);

// console.log(Name);

// using FILTER METHOD
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const deposites = movements.filter(function (mov) {
//   return mov > 0;
// });

// console.log(deposites);

// const depositeFor = [];
// for (const mov of movements) {
//   if (mov > 0) {
//     depositeFor.push(mov);
//   }
// }

// console.log(depositeFor);

// const withdrawals = movements.filter(function (mov) {
//   return mov < 0;
// });

// console.log(withdrawals);

// REDUCE METHOD
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   return acc + cur;
// }, 0);

// console.log(balance);

// let balance2 = 0;
// for (const mov of movements) {
//   balance2 += mov;
// }

// console.log(balance2);

// max value calculation

// const max = movements.reduce(function (acc, cur) {
//   if (acc > cur) {
//     return acc;
//   } else {
//     return cur;
//   }
// }, movements[0]);

// console.log(max);

//coding challenge

// const calAverageHumanAge = function (ages) {
//   const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   const adults = humanAges.filter(age => age >= 18);
//   console.log(humanAges);
//   console.log(adults);

//   const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
//   console.log(average);
//   return average;
// };
// calAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

// The magic of chaining method
// we want to calculate the total deposits in USD .
const euroToUSD = 1.1;

//PIPELINE
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * euroToUSD)
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(totalDepositsUSD);

// coding challenge3
const calAverageHumanAges = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

console.log(calAverageHumanAges([5, 2, 4, 1, 15, 8, 3]));

// FIND METHOD

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);
console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/*
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

let arr = ['a', 'b', 'c', 'd', 'e'];

//slice

console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(aa.slice());
console.log([...arr]);
// slice in array does not mutate the original array it will create a new array with the values

//Splice
console.log(arr.splice(2));
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// splice will actually mutate the original array and we basically used it to delete elements from array

//Reverse
arr = ['a', 'b', 'c', 'd', 'e'];
let arr2 = ['j', 'i', 'h', 'g', 'f'];
console / log(arr2.reverse());
console.log(arr2); // it mutate the original array

// concat
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);
// it does not mutate the original array

//join
console.log(letters.join('-'));

// The new AT METHOD

const num = [23, 64, 57];
console.log(num[0]); // if want to get any num from array
console.log(num.at(0)); // another way of doing it

//getting last array element
console.log(num[num.length - 1]);
console.log(num.slice(-1));
console.log(num.at(-1));

// AT METHOD also works on strings
console.log('jonas'.at(0));
console.log('jonas'.at(-1));


// USING FOR EACH METHOD for looping on array

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You have deposited ${movement}`);
//   } else {
//     console.log(`You withdraw ${Math.abs(movement)}`);
//   }
// }

// console.log('-----FOREACH------');

// movements.forEach(function (movement) {
//   if (movement > 0) {
//     console.log(`You have deposited ${movement}`);
//   } else {
//     console.log(`You withdraw ${Math.abs(movement)}`);
//   }
// });

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You have deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdraw ${Math.abs(movement)}`);
  }
}

console.log('-----FOREACH------');

movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}:You have deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}:You withdraw ${Math.abs(mov)}`);
  }
});

// For each method with MAPS AND SETS

//MAP
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key} : ${value}`);
});

//SET

const currenciesUnique = new Set(['USB', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value} : ${value}`);
});

*/

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // converting euro to US dollars
// const euroToUSD = 1.1;
// // const USD = movements.map(function (move) {
// //   return move * euroToUSD;
// // });

// // console.log(USD);
// // console.log(movements);

// const USD = movements.map(move => move * euroToUSD);
// console.log(USD);

// Sorting array

// Strings
const owners = ['Pooja', 'Kajal', 'Tabassum', 'Ankita', 'Karry'];
console.log(owners.sort());
console.log(owners);

// Numbers
console.log(movements);

//return < 0,A ,B (keep order)
//return >0 ,A , B (switch order)

// Ascending
movements.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});

console.log(movements);

//Descending

movements.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
});

console.log(movements);

// fill method in arrays

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7, 8));

//Empty arrays +  fill Method
const x = new Array(7);
console.log(x);
//console.log(x.map(()=>5));

// x.fill(value , starting index , ending index)
x.fill(1, 3, 6);
x.fill(1);
console.log(x);

arr.fill(23, 2, 6);
console.log(arr);

//
