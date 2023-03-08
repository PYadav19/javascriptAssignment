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

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`your pasta is ready with ${ing1}  ${ing2}, and ${ing3}`);
  },
};

// spread operator(...)-----------------------------------------------------------------------------------------

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

// spread operator works on all iterables- strings , arrays , maps ,sets but not objects

const str = 'Pooja';
console.log(...str);

const strArr = [...str];
console.log(strArr);

// make new function to order pasta with 3 ingredients , and than collect the ingredients value from user
//using the promopt method and store values in an array . than call the order pasta function with those arguments.
const ingredients = [
  prompt('Lets make pasta ! Ingredient 1? '),
  prompt(' Ingredient 2? '),
  prompt(' Ingredient 3? '),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]); // manually
restaurant.orderPasta(...ingredients); // using spread operator

// objects
const newRestaurant = { ...restaurant, founder: 'Guiseppe', foundedIn: 1997 };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurant.name);
console.log(restaurantCopy.name);

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

// 1. Destructuring
// Rest and Patterns
//SPREAD , because on RIGHT SIDE OF =
const Array = [1, 2, 3, ...[4, 5]];

// REST , because ON LEEFT SIDE OF =
const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Rest Element shous always be the last element and only 1 rest elemenst
// should be there

//Objects

const { sat, ...weekends } = restaurant.openingHours;
console.log(weekends);

//2. Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

// SHORT CIRCUITING (|| , &&)
/*
if the first value is truthy value than it will return the 1st value
it will not evaluate the other values , only incase the 1st value is fasly 
in that case only it will go to other value.
*/

console.log('------------ NOT ----------------');

console.log(3 || 'Pooja');
console.log('' || 'Pooja');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || '' || 'Hello' || 23 || null);

//example
restaurant.numGuests = 23;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

//using short circuiting
const guest2 = restaurant.numGuests || 10;
console.log(guest2);

// if we set the value to 0 then it will not print 0 because it's a falsy value
console.log('----------- AND ---------------');

console.log(7 && 'Pooja');
console.log(0 && 'pooja');

console.log('hello' && 23 && null && 'Pooja');

//Example
if (restaurant.orderPasta) {
  restaurant.orderPasta('mushroom', 'spinacch', 'Cheese');
}

// using short circuiting
restaurant.orderPasta &&
  restaurant.orderPasta('mushroom', 'spinacch', 'Cheese');

// Nullish coalscing

restaurant.numGuests = 0;
const guest = restaurant.numGuests || 10;
console.log(guest);

//Nullish = null and undefined (NOT 0 OR '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
console.log('Pooja Yadav');
