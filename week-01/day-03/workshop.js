'use strict';

console.log('\n===========================================');
// 01

var example = "In a dishwasher far far away";

// I would like to replace "dishwasher" with "galaxy" in this example
// Please fix it for me!
// Expected ouput: In a galaxy far far away

console.log(example)
example = example.replace('dishwasher', 'galaxy');
console.log(example);

console.log('\n===========================================');
//02

// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

const reversed = ".eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI";
console.log(reverse(reversed));

function reverse(str) {
  return str.split('').reverse().join('')
};

module.exports = reverse;

console.log('\n===========================================');
//03

// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!

var url = "https//www.reddit.com/r/nevertellmethebots";
url.replace('bot', 'odd');
url = url.substring(0, 5) + ':' + url.substring(5);
console.log(url);

console.log('\n===========================================');
//04

// When saving this quote a disk error has occured. Please fix it.
// Add "always takes longer than" to between the words "It" and "you"

var quote = "Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law."
let index = quote.indexOf('It you');
quote = quote.substring(0, index + 2) + 'always takes longer than' + quote.substring(index + 2);
console.log(quote);

console.log('\n===========================================');
//05

// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

// Expected outpt:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

var todoText = "Mymtodo:\n  - Buy milk\n  - Download games\n    - Diablo";

console.log(todoText);

console.log('\n===========================================');
//06

/*
# Map introduction 1

We are going to play with maps. Feel free to use the built-in methods where
possible.

- Create an empty map where the keys are integers and the values are characters
- Print out whether the map is empty or not
- Add the following key-value pairs to the map

  | Key | Value |
  | :-- | :---- |
  | 97  | a     |
  | 98  | b     |
  | 99  | c     |
  | 65  | A     |
  | 66  | B     |
  | 67  | C     |

- Print all the keys
- Print all the values
- Add value D with the key 68
- Print how many key-value pairs are in the map
- Print the value that is associated with key 99
- Remove the key-value pair where with key 97
- Print whether there is an associated value with key 100 or not
- Remove all the key-value pairs
*/
const map1 = {
  97: 'a',
  98: 'b',
  99: 'c',
  65: 'A',
  66: 'B',
  67: 'C'
}

Object.keys(map1).forEach((x) => console.log(x));
Object.values(map1).forEach((x) => console.log(x));
map1['68'] = 'D';
console.log(Object.keys(map1).length);
console.log(map1['99']);
delete map1['97'];
console.log(map1);
console.log(map1.hasOwnProperty('100'));
Object.keys(map1).forEach((x) => delete map1[x]);
console.log(map1);


console.log('\n===========================================');
// 07

/*
# Map introduction 2

- Create a map where the keys are strings and the values are strings with the
  following initial values

  | Key               | Value                   |
  | :---------------- | :---------------------- |
  | 978-1-60309-452-8 | A Letter to Jo          |
  | 978-1-60309-459-7 | Lupus                   |
  | 978-1-60309-444-3 | Red Panda and Moon Bear |
  | 978-1-60309-461-0 | The Lab                 |

- Print all the key-value pairs in the following format
  ```text
  A Letter to Jo (ISBN: 978-1-60309-452-8)
  Lupus (ISBN: 978-1-60309-459-7)
  Red Panda and Moon Bear (ISBN: 978-1-60309-444-3)
  The Lab (ISBN: 978-1-60309-461-0)
  ```
- Remove the key-value pair with key 978-1-60309-444-3
- Remove the key-value pair with value The Lab
- Add the following key-value pairs to the map

  | Key               | Value                 |
  | :---------------- | :-------------------- |
  | 978-1-60309-450-4 | They Called Us Enemy  |
  | 978-1-60309-453-5 | Why Did We Trust Him? |

- Print whether there is an associated value with key 478-0-61159-424-8 or not
- Print the value associated with key 978-1-60309-453-5
*/

const map2 = {
  '978-1-60309-452-8': 'A Letter to Jo',
  '978-1-60309-459-7': 'Lupus',
  '978-1-60309-444-3': 'Red Panda and Moon Bear',
  '978-1-60309-461-0': 'The Lab'
}

for (let key in map2) {
  console.log(`${map2[key]} (ISBN: ${key})`);
}

delete map2['978-1-60309-444-3'];

for (let key in map2) {
  if (map2[key] === 'The Lab') {
    delete map2[key];
  }
}

map2['978-1-60309-450-4'] = 'They Called Us Enemy';
map2['978-1-60309-453-5'] = 'Why Did We Trust Him?';

console.log(map2.hasOwnProperty('478-0-61159-424-8'));
console.log(map2['978-1-60309-453-5']);


console.log('\n===========================================');
// 08

/*
# Telephone book

We are going to represent our contacts in a map where the keys are going to be
strings and the values are going to be strings as well.

- Create a map with the following key-value pairs.

  | Name (key)          | Phone number (value) |
  | :------------------ | :------------------- |
  | William A. Lathan   | 405-709-1865         |
  | John K. Miller      | 402-247-8568         |
  | Hortensia E. Foster | 606-481-6467         |
  | Amanda D. Newland   | 319-243-5613         |
  | Brooke P. Askew     | 307-687-2982         |

- Create an application which solves the following problems.
  - What is John K. Miller's phone number?
  - Whose phone number is 307-687-2982?
  - Do we know Chris E. Myers' phone number?
  */

const telephoneBook = {
  'William A. Lathan': '405-709-1865',
  'John K. Miller': '402-247-8568',
  'Hortensia E. Foster': '606-481-6467',
  'Amanda D. Newland': '319-243-5613',
  'Brooke P. Askew': '307-687-2982'
}

console.log(telephoneBook['John K. Miller']);
for (let key in telephoneBook) {
  if (telephoneBook[key] === '307-687-2982') {
    console.log(key);
  }
}
console.log(telephoneBook.hasOwnProperty('Chris E. Myers'));


console.log('\n===========================================');
// 09
/*
# Product database

We are going to represent our products in a map where the keys are strings
representing the product's name and the values are numbers representing the
product's price.

- Create a map with the following key-value pairs.

  | Product name (key) | Price (value) |
  | :----------------- | :------------ |
  | Eggs               | 200           |
  | Milk               | 200           |
  | Fish               | 400           |
  | Apples             | 150           |
  | Bread              | 50            |
  | Chicken            | 550           |

- Create an application which solves the following problems.
  - [How much is the fish?](https://www.youtube.com/watch?v=cbB3iGRHtqA)
  - What is the most expensive product?
  - What is the average price?
  - How many products' price is below 300?
  - Is there anything we can buy for exactly 125?
  - What is the cheapest product?
*/

const productDatabase = {
  Eggs: 200,
  Milk: 200,
  Fish: 400,
  Apples: 150,
  Bread: 50,
  Chicken: 550
}

console.log(productDatabase.Fish);
const sortedKeys = Object.keys(productDatabase).sort((a, b) => productDatabase[a] > productDatabase[b]);
console.log(sortedKeys[sortedKeys.length - 1] + ' is most expensive');
const productDatabaseValues = Object.values(productDatabase);
const average = productDatabaseValues.reduce((a, b) => a + b) / productDatabaseValues.length;
console.log('average:' + average);
let count = 0;
let thereIsPrice150 = false;
for (let key in productDatabase) {
  if (productDatabase[key] < 300) {
    count++;
  }
  if (parseInt(productDatabase[key]) === 150) {
    thereIsPrice150 = true;
  }
}
console.log(count + ' products\' price is below 300');
console.log('Is there anything we can buy for exactly 125?');
console.log(sortedKeys[0] + ' is the cheapest');


console.log('\n===========================================');
// 10
/*
# Product database 2

We are going to represent our products in a map where the keys are strings
representing the product's name and the values are numbers representing the
product's price.

- Create a map with the following key-value pairs.

  | Product name (key) | Price (value) |
  | :----------------- | :------------ |
  | Eggs               | 200           |
  | Milk               | 200           |
  | Fish               | 400           |
  | Apples             | 150           |
  | Bread              | 50            |
  | Chicken            | 550           |

- Create an application which solves the following problems.
  - Which products cost less than 201? (just the name)
  - Which products cost more than 150? (name + price)
  */

const productDatabase2 = {
  Eggs: 200,
  Milk: 200,
  Fish: 400,
  Apples: 150,
  Bread: 50,
  Chicken: 550
}

const productsLess201 = [];
const productsMore150 = [];

for (let key in productDatabase2) {
  if (productDatabase2[key] < 201) {
    productsLess201.push(key);
  }
  if (productDatabase2[key] > 150) {
    productsMore150.push([key, productDatabase2[key]]);
  }
}

console.log('productsLess201: ' + productsLess201);
console.log('productsMore150: ' + productsMore150);


console.log('\n===========================================');
// 11
/*
# Shopping list 2

- Represent the following products with their prices

  | Product         | Amount |
  | :-------------- | :----- |
  | Milk            | 1.07   |
  | Rice            | 1.59   |
  | Eggs            | 3.14   |
  | Cheese          | 12.60  |
  | Chicken Breasts | 9.40   |
  | Apples          | 2.31   |
  | Tomato          | 2.58   |
  | Potato          | 1.75   |
  | Onion           | 1.10   |

- Represent Bob's shopping list

  | Product         | Amount |
  | --------------- | ------ |
  | Milk            | 3      |
  | Rice            | 2      |
  | Eggs            | 2      |
  | Cheese          | 1      |
  | Chicken Breasts | 4      |
  | Apples          | 1      |
  | Tomato          | 2      |
  | Potato          | 1      |

- Represent Alice's shopping list

  | Product         | Amount |
  | --------------- | ------ |
  | Rice            | 1      |
  | Eggs            | 5      |
  | Chicken Breasts | 2      |
  | Apples          | 1      |
  | Tomato          | 10     |

- Create an application which solves the following problems.
  - How much does Bob pay?
  - How much does Alice pay?
  - Who buys more Rice?
  - Who buys more Potato?
  - Who buys more different products?
  - Who buys more products? (piece)
*/

const products = {
  Milk: 1.07,
  Rice: 1.59,
  Eggs: 3.14,
  Cheese: 12.60,
  'Chicken Breasts': 9.40,
  Apples: 2.31,
  Tomato: 2.58,
  Potato: 1.75,
  Onion: 1.10,
}

const bobList = {
  Milk: 3,
  Rice: 2,
  Eggs: 2,
  Cheese: 1,
  'Chicken Breasts': 4,
  Apples: 1,
  Tomato: 2,
  Potato: 1,
}

const aliceList = {
  Rice: 1,
  Eggs: 5,
  'Chicken Breasts': 2,
  Apples: 1,
  Tomato: 10,
}

function totalPayment(list) {
  let pay = 0;
  for (let key in list) {
    pay += list[key] * products[key];
  }
  return pay;
}

console.log('Bob pays ' + totalPayment(bobList));

console.log('Alice pays ' + totalPayment(aliceList));

//ternary operator if dor assignment or returns but not command execution
//const whoBuysMore = (product) => aliceList[product] > bobList[product] ? console.log('Alice buys more ' + product) : console.log('Bob buys more ' + product);
const whoBuysMore = (product) => aliceList[product] > bobList[product] ? 'Alice' : 'Bob';


console.log(`${whoBuysMore('Rice')} buys more different products`);
console.log(`${whoBuysMore('Potato')} buys more different products`);

Object.keys(aliceList).length > Object.keys(bobList).length ? console.log('Alice buys more different priducts') : console.log('Bob buys more different priducts');

function countPiece(productlist) {
  let piece = 0;
  for (let key in productlist) {
    piece += productlist[key];
  }
  return piece;
}
countPiece(aliceList) > countPiece(bobList) ? console.log('Alice buys more priducts') : console.log('Bob buys more priducts');


console.log('\n===========================================');
//12
// Write a program that prints apple after 3 seconds.
setTimeout(() => console.log('apple'), 3000);


console.log('\n===========================================');
//13
// Write a program that prints the following fruits:
// apple -> immediately
// pear -> after 1 seconds
// melon -> after 3 seconds
// grapes -> after 5 seconds

console.log('apple');
setTimeout(() => console.log('pear'), 1000);
setTimeout(() => console.log('melon'), 3000);
setTimeout(() => console.log('grapes'), 5000);



console.log('\n===========================================');
//14
const mapWith = (array, callback) => {
  let output = [];

  // The mapWith() function should iterate over the given array and call the callback function on every element.
  // It stores the callback return values in the output.
  // The mapWith() should return with the output array.
  for (let i = 0; i < array.length; i++) {
    output.push(callback(array[i]));
  }

  return output;
}

const addOne = (number) => {
  return number + 1;
}

// Exercise 1:

console.log(mapWith([1, 2, 3], addOne));
//expected result: [2, 3, 4]

// Exercise 2:

// Create a callback function which removes every second character from a string
const removeSecondLetter = (str) => {
  const removeSecondRecusion = (str) => {
    if (str.length < 2) {
      return str;
    }
    return str.substring(0, 1) + removeSecondRecusion(str.substring(2));
  }
  return removeSecondRecusion(str);
}

const words = ['map', 'reduce', 'filter'];

console.log(mapWith(words, removeSecondLetter));
  // expected result: ['mp','rdc', 'fle']
