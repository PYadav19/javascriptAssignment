'use strict';

// Data needed for a later exercise
// const flights =
// '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return this.starterMenu[starterIndex], this.mainMenu[mainIndex];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    address,
    time = '20:00',
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

// spread operator(...)

const arr = [1, 2, 3];

//I want to create a new array by adding 2 new values in the starting of the arr - array .

// manually
const newBadArray = [4, 5, arr[0], arr[1], arr[2]];
console.log(newBadArray);

// using spread operator
const newArray = [6, 7, ...arr];
console.log(newArray);
// putting values separately as below
console.log(...newArray); // output 6 7 1 2 3

// manually
console.log(1, 2, 3, 4, 5);

// supoose i want to add new main menu by adding one more food item in the existing mainmenu
const newMainMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMainMenu);

// 2 imp usecases of spread operator 1- shallow copy or arrays and to merge to array

// copy array

const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// add 2 arrays

const menu = [...restaurant.mainMenu, ...newMainMenu];
console.log(menu);

/*
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole , 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole , 21',
  starterIndex: 1,
});

// Destructuring objects---------------------------------------------------------------------------
// we have to mention the as it is name of the properties same as in object

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// if you want to give different names to the properties do as below
const {
  name: restaurantName,
  openingHours: Hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, Hours, tags);

// default values
const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);

// Mutate Value
let a = 111;
let b = 999;
const obj = { a: 23, b: 11 };
({ a, b } = obj);
console.log(a, b);

// Nested object

const {
  fri: { open: O, close: C },
} = openingHours;
console.log(O, C);
*/
// Array destructuring -----------------------------------------------------------------------

//  without destructuring normal way
// const arr = [2, 4, 6];
// let a = arr[0];
// let b = arr[1];
// let c = arr[2];
// console.log(a, b, c);

//desturcturing
// const [x, y, z] = arr;
// console.log(x, y, z);

// const [first, , second] = restaurant.categories;
// console.log(first, second);

// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);

// Switching variables
// let temp = main;
// main = secondary;
// secondary = temp;

// console.log(main, secondary);

// using destructuring
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);
