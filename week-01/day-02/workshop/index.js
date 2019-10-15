/* eslint-disable no-plusplus */
/* eslint-disable no-console */

// 1

const a = 24;
let out = 0;
// if a is even increment out by one
if (a % 2 === 0) {
  out++;
}

console.log(out);

const b = 13;
const out2 = '';
// if b is between 10 and 20 set out2 to 'Sweet!'
// if less than 10 set out2 to 'More!',
// if more than 20 set out2 to 'Less!'
if (b >= 10 && b <= 20) {
  console.log('Sweet');
} else if (b < 10) {
  console.log('More');
} else {
  console.log('Less');
}

console.log(out2);

let c = 123;
const credits = 100;
const isBonus = false;
// if credits are at least 50,
// and isBonus is false decrement c by 2
// if credits are smaller than 50,
// and isBonus is false decrement c by 1
// if isBonus is true c should remain the same
if (credits >= 50 && !isBonus) {
  c -= 2;
} else if (credits < 50) {
  c--;
}

console.log(c);

const d = 8;
const time = 120;
let out3 = '';
// if d is dividable by 4
// and time is not more than 200
// set out3 to 'check'
// if time is more than 200
// set out3 to 'Time out'
// otherwise set out3 to 'Run Forest Run!'
if (d % 4 === 0 && time <= 200) {
  out3 = 'check';
} else if (time > 200) {
  out3 = 'Time out';
} else {
  out3 = 'Run Forest Run!';
}

console.log(out3);


// 2

// Create a program that writes this line 100 times:
// 'I like trains!'
for (let i = 0; i < 100; i++) {
  console.log('I like trains!');
}


// 3

// Create a program that prints all the even numbers between 0 and 500
for (let i = 0; i < 500; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}


// 4

const number = 15;

// Create a program that
// prints the multiplication table with number
//
// Example:
// The number 15 should print:
//
// 1 * 15 = 15
// 2 * 15 = 30
// 3 * 15 = 45
// 4 * 15 = 60
// 5 * 15 = 75
// 6 * 15 = 90
// 7 * 15 = 105
// 8 * 15 = 120
// 9 * 15 = 135
// 10 * 15 = 150

for (let i = 1; i <= number; i++) {
  console.log('%d * 15 = %d', i, i * 15);
}


// 5
// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number
// and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”.

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}


// 6

const lineCount = 4;

// Write a program that draws a
// triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is

for (let i = 0; i < lineCount; i++) {
  let stars = '*';
  for (let j = 0; j < i; j++) {
    stars = stars.concat('*');
  }
  console.log(stars);
}


// 10

const lineCount2 = 12;


// Write a program that draws a
// square like this:
//
//
// %%%%%%
// %%   %
// % %  %
// %  % %
// %   %%
// %%%%%%
//
// The square should have as many lines as lineCount is

let squareStr = '';
for (let i = 0; i < lineCount2; i++) {
  for (let j = 0; j < lineCount2; j++) {
    if ((i === 0 || i === lineCount2 - 1) || (j === 0 || j === lineCount2 - 1 || j === i)) {
      squareStr = squareStr.concat('%');
    } else {
      squareStr = squareStr.concat(' ');
    }
  }
  squareStr = squareStr.concat('\n');
}
console.log(squareStr);


// 11

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//

let chessTableStr = '';
for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    if ((i % 2 === 0 && j % 2 === 1) || (i % 2 === 1 && j % 2 === 0)) {
      chessTableStr = chessTableStr.concat('%');
    } else {
      chessTableStr = chessTableStr.concat(' ');
    }
  }
  chessTableStr = chessTableStr.concat('\n');
}
console.log(chessTableStr);


// 12

// - Create a variable named `ak` and assign the value `123` to it
// - Create a function called `doubling` that doubles it's input parameter
// - Log the result of `doubling(ak)` to the console

const ak = 123;
const doubling = (x) => 2 * x;
console.log(doubling(ak));


// 13

// - Create variable named `al` and assign the value `EPAM` to it
// - Create a function called `greet` that greets it's input parameter
//     - Greeting is printing e.g. `Greetings, dear EPAM`
//     - Prepare for the special case when no parameters are given
// - Greet `al`

const al = 'EPAM';
const greet = (name = al) => console.log(`Greetings, dear ${name}`);
greet();


// 14

// - Create a variable named `am` and assign the value `dog` to it
// - Write a function called `appendS` that gets a string as an input
//   and appends an 's' character to its end
// - Print the result of `appendS(am)` to the console

const am = 'dog';
const appendS = (str) => str.concat('s');
console.log(appendS(am));


// 15

// - Write a function called `sum` that sum all the numbers until the given parameter
// - The function should return the result

function sum(n) {
  let s = 0;
  for (let i = 1; i <= n; i++) {
    s += i;
  }
  return s;
}

console.log(sum(5));


// 16

// - Create a function called `factorio`
//   that returns it's input's factorial


function factorio(n) {
  let f = 1;
  for (let i = 1; i <= n; i++) {
    f *= i;
  }
  return f;
}

console.log(factorio(4));

// 17

// - Create a function called `printer`
//   which logs to the console the input parameters
//   (can have multiple number of arguments)

function printer(...printContents) {
  printContents.forEach((x) => console.log(x));
}

printer('a', 'b', 'c');


// 18

// - Create a variable named `magicNumbers`
//   with the following content: `[1, 3, 5, 7]`
// - Print the third element of `magicNumbers`

const magicNumbers = [1, 3, 5, 7];
console.log(magicNumbers[2]);


// 19

// - Create a variable named `p1`
//   with the following content: `[1, 2, 3]`
// - Create a variable named `p2`
//   with the following content: `[4, 5]`
// - Log to the console if `p2` has more elements than `p1`

const p1 = [1, 2, 3];
const p2 = [4, 5];
console.log(p2.length > p1.length);


// 20

// - Create a variable named `r` with the following content: `[54, 23, 66, 12]`
// - Print the sum of the second and the third element

const r = [54, 23, 66, 12];
console.log(r[1] + r[2]);


// 21

// - Create a variable named `abc` with the following content: `['Arthur', 'Boe', 'Chloe']`
// - Swap the first and the third element of `abc`

const abc = ['Arthur', 'Boe', 'Chloe'];
[abc[0], abc[2]] = [abc[2], abc[0]];
console.log(abc);


// 22

// - Create a variable named `af` with the following content: `[4, 5, 6, 7]`
// - Log each the element of `af` to the console*
// *hint: use a loop, console.log(af) won't cut it
// - bonus for using the correct built in array method

const af = [4, 5, 6, 7];
af.forEach((x) => console.log(x));


// 23

// - Create an array named `s` with the following content: `[1, 2, 3, 8, 5, 6]`
// - Change the 8 to 4 with the `.map` method
// - Print the fourth element as a test
const s = [1, 2, 3, 8, 5, 6];
console.log(s.map((x) => (x === 8 ? 4 : x))[3]);


// 24

// - Create a variable named `t` with the following content: `[1, 2, 3, 4, 5]`
// - Increment the third element simply by accessing it
// - Log the third element to the console

const t = [1, 2, 3, 4, 5];
t[2]++;
console.log(t[2]);


// 25

// - Create a variable named `animals`
//   with the following content: `['dog', 'cat', 'kitten']`
// - Add all elements an `'s'` at the end
// - try to use built in functions instead of loops

const animals = ['dog', 'cat', 'kitten'];
console.log(animals.map((x) => x.concat('s')));


// 26

// - Create an array variable named `ag` with the following content: `['Gin', 'Whiskey', 'Wine', 'Beer']`
// - Double all the strings in the array, use a built in array method instead of a loop
// It should print: ['GinGin', 'WhiskeyWhiskey', 'WineWine', 'BeerBeer']`

const ag = ['Gin', 'Whiskey', 'Wine', 'Beer'];
console.log(ag.map((x) => x.concat(x)));


// 27

// - Create a two dimensional list
//   which can contain the different shades of specified colors
// - In `colors[0]` store the shades of green:
//   `'lime', 'forest green', 'olive', 'pale green', 'spring green'`
// - In `colors[1]` store the shades of red:
//   `'orange red', 'red', 'tomato'`
// - In `colors[2]` store the shades of pink:
//   `'orchid', 'violet', 'pink', 'hot pink'`

const colors = [];
colors[0] = ['lime', 'forest green', 'olive', 'pale green', 'spring green'];
colors[1] = ['orange red', 'red', 'tomato'];
colors[2] = ['orchid', 'violet', 'pink', 'hot pink'];

console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);


// 28

// - Create a variable named `ai` with the following content: `[3, 4, 5, 6, 7]`
// - Log the sum of the elements in `ai` to the console

const ai = [3, 4, 5, 6, 7];
console.log(ai.reduce((xp, xn) => xp + xn));


// 29

// - Create (dynamically*) a two dimensional list
//   with the following matrix**. Use a loop!
//
//   0 0 0 1
//   0 0 1 0
//   0 1 0 0
//   1 0 0 0
//
// - Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

const matrix = [[], [], [], []];
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    if (3 - i === j) {
      matrix[i][j] = 1;
    } else {
      matrix[i][j] = 0;
    }
  }
}
console.log(matrix);


// 30

// - Create a variable named `aj`
//   with the following content: `[3, 4, 5, 6, 7]`
// - Reverse the order of the elements in `aj`
//    - do it with the built in method
//    - do it with creating a new temp array and a loop
// - Print the elements of the reversed `aj`

const aj = [3, 4, 5, 6, 7];
const ajReverse = [];
for (let i = 0; i < aj.length; i++) {
  ajReverse.push(aj[aj.length - 1 - i]);
}
console.log(ajReverse);

aj.reverse();
console.log(aj);
