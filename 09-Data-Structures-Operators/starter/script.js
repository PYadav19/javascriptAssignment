'use strict';

// Data needed for a later exercise
// const flights =
// '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
/*


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

if the first value is truthy value than it will return the 1st value
it will not evaluate the other values , only incase the 1st value is fasly 
in that case only it will go to other value.


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

// Logical Assignment operators

const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// Nullish
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

console.log(rest1);
console.log(rest2);

// rest1.owner = rest1.owner && '<ANONYMOUS';
// rest2.owner = rest2.owner && 'ANONYMOUS';

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

console.log(rest1);
console.log(rest2);

*/

/*
//Enhanced object literals
// 1. Example

// create another oject

const openingHours = {
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
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return this.starterMenu[starterIndex], this.mainMenu[mainIndex];
  },
  //  ES6 enhanced object literal way
  openingHours,
  // ES6 2. enchancment is that we can write the methods without using function keyword as below
  orderDelivery({ starterIndex = 1, mainIndex = 0, address, time = '20:00' }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`your pasta is ready with ${ing1}  ${ing2}, and ${ing3}`);
  },
};

console.log(restaurant);

// newer feature of arrays and objects :- optional  chaining
// suppose we want to check what are the opening hours on mon in restaurant

// mon does not exist that why we got these output
console.log(restaurant.openingHours.mon); // undefined
// console.log(restaurant.openingHours.mon.open); // here it will give error "canread properties of undefined not "

console.log(restaurant.openingHours.fri.open); // friday exists  output :11

// to avoid the error we have to check for the condition
if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon);

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

//with operational chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example:
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// we want to loop through this array and check if the restaurant is open for each day.
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

//Methods
console.log(restaurant.order?.(0, 2) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

//Arrays
const user = [{ name: 'jonas', email: 'hellojonas.io' }];

console.log(user[0]?.name ?? 'User array empty');

// MAP fundamentals

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze , Italy');
console.log(rest.set(2, 'Lisbon Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'we are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(
  time > rest.get(time > rest.get('open') && time < rest.get('close'))
);

console.log(rest.has('categories'));
rest.delete(2);
//rest.clear();
console.log(rest);
console.log(rest.size);

// using array and object as map key
const arr = [1, 2];
rest.set(arr, 'Test');

rest.set(document.querySelector('h1'), 'Heading');

// MAP ITERATIONS
// there is another method of generating map without using set method syntax below
// Syntax :- type variable-name = new Map([[key , value],[key , value],[],[]])
const question = new Map([
  ['question', 'What is the best rogramming language in the world'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  [4, 'C++'],
  ['correct', 3],
  [(true, 'Correct')],
  [false, 'Try again!'],
]);

console.log(question);

// we can also convert an object into map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz App
// we can  do interation as well on maps

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

const answer = Number(prompt('Your answer'));
console.log(answer);
const result = question.get('correct') === answer;
//console.log(result);
// console.log(question.get(question.get(result)));

// Convert map to array

console.log([...question]);
// console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);
*/
//Strings
const airline = 'Vistara jet';
const plane = 'A340';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);
console.log('8737'[0]);

console.log(airline.length);
console.log('8737'.length);

console.log(airline.indexOf('r'));
console.log(airline.indexOf('s'));
console.log(airline.lastIndexOf('a'));
console.log(airline.indexOf('jet'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// we can also use negative arguement than it will start extracting elements from end.
console.log(airline.slice(-2));
console.log(airline.slice(1, -3));

// write a function which receive the seat number and logs to console whether it is middle seat or not.

const middleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the Middle seat ');
  } else {
    console.log('You got lucky :)');
  }
};

middleSeat('11B');
middleSeat('23C');
middleSeat('24E');

/*Strings are primitive but still we are able to call method on it because javascript.- 
whenever we call a method on a string javascript will automatically behind the scenes convert the 
string primitive to a string object with a same content and than its on that object on which method is called
and this process is called boxing because it basically takes our string and put it into a box which is the object

console.log(new String('Pooja'));
console.log(typeof new String('Pooja'));
console.log(typeof new String('Pooja').slice(1));

*/
// String Methods

// changing the case of a string

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
console.log('Pooja Yadav'.toLowerCase());
console.log('Pooja Yadav'.toUpperCase());

//FIX THE CAPITALIZATION IN NAME

const passenger = 'jOnAS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// create a function which takes any passenger name and converts it itno correct one

const correctPassengerName = function (passengerName) {
  const name = passengerName.toLowerCase();
  const correctName = name[0].toUpperCase() + name.slice(1);
  console.log(correctName);
};

correctPassengerName('pOoJA');
correctPassengerName('kashiSH');
correctPassengerName('visHAlI');
correctPassengerName('kaJaL');

// comparing user input emails

const email = 'poojayd19@gmail.com';
const loginEmail = '   PoojaYD19@GMAil.com  \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim(); // to get rid of all white spaces
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim(); // another way of doing above task
console.log(normalizedEmail);

// Replacing

const priceGB = '288,97*';
const priceUS = priceGB.replace('*', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passenger come to the boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));

//Boolean

const Plane = ' Airbus A320neo';
console.log(Plane.includes('A320'));
console.log(Plane.includes('Boeing'));
console.log(Plane.startsWith('Airb'));

if (Plane.startsWith('Airbus') && Plane.endsWith('neo'))
  console.log('Part of the New airbus family');

// Practice exercise

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop , Knife ');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

checkBaggage('clothes and food');

// strings part 3
// split and jin menthod

console.log('a+very+nice+string'.split('+')); // output ['a','very','nice','string']
console.log('Pooja Yadav'.split(' ')); // it will store the result in array
const [firstName, lastName] = 'Pooja Yadav'.split(' ');

const newName = ['Ms.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');

  for (const n of names) {
    n[0].toUpperCase + n.slice(1);
  }
};
const Passenger = 'jessica ann smith davis';
