const str = 'this is my first string';
const sti2 = 'line1 line2';


//... form array as function param, destroy array as input

//copy reference type
//shallow vs deep
const myObj3 = {a:12, b:13};
const myCopy = {...myObj3}; //shallow copy

oMerage1 = {a: 1, b:2};
oMerage2 = {c: 1, d: 3};
meraged = {...oMerage1, ...oMerage2};


function logHello(){
    console.log('hello');
}

{
    const timeOutId = 0;
}
const timeOutId = setTimeout(logHello, 3000);
clearTimeout(timeOutId);

const setIntervalId = setInterval(logHello, 1000);
clearInterval(setIntervalId);


const testString = 'this is my first string';

// reverse, substring, replace, endsWith, startsWith, split, trim
const substring = testString.substring(0, 2);
console.log(substring);
console.log(testString);

const newString = testString.replace(/i/g, 'b');  // replace all
console.log(newString);

console.log(testString.startsWith('this'));

console.log(testString.split(' '));
console.log(testString.split('').reverse().join(''));

console.log('     this is a string with white spaces     '.trim());

const stringWithNewLine = "this is a string with white spaces\nand this is a new line\n";
console.log(stringWithNewLine);
console.log(stringWithNewLine.trim());

// objects

const myObj = new Object();
myObj.a = 12;
myObj.b = 13;
console.log(myObj);

const myOtherObj = {
  a: 12,
  b: 13,
};

console.log(myOtherObj);

// keys, values, for item in
console.log(Object.keys(myOtherObj));
console.log(Object.values(myOtherObj));

for(let item in myOtherObj) {
  console.log(item);
}

// destructuring with arrays
console.log([1, 2, 3, 4]);
console.log(...[1, 2, 3, 4]);
console.log(1, 2, 3, 4);

const myObj1 = {a: 12, b: 13};
const myObj2 = myObj1;
myObj2.c = 14;
console.log(myObj1);

// shallow copy
for (let key in myObj1) {
  myObj2[key] = myObj1[key];
}


const myDeepObj = {
  a: 12,
  b: {
    c: 13,
  },
};
const myCopy = {};
for (let key in myDeepObj) {
  myCopy[key] = myDeepObj[key];
}
myCopy.a = 13;
myCopy.b.c = 15;
console.log('==============');
console.log(myDeepObj);
console.log(myCopy);


const myObj3 = {a: 12, b: 13};
const myCopy2 = {...myObj3};
myCopy2.a = 2;
console.log('==============');
console.log(myObj3);
console.log(myCopy2);
// get specific values, copy objects, deep copy, spread operator, merge

myObjToMerge1 = {a: 12, b: 13};
myObjToMerge2 = {a: 14, d: 15};
myMergedObj = {...myObjToMerge1, ...myObjToMerge2};
console.log('==============');
console.log(myMergedObj);

// rearrange fields
const orderOfFields = {b: undefined, g: undefined, d: undefined};
const objectToRearrange = {d: 'apple', g: 'tree', b: 'banana'};
const ordered = {...orderOfFields, ...objectToRearrange};
console.log('==============');
console.log(ordered);

// destructuring
const myValues = {a: 12, b: 13, c: 14};
const { a, b } = myValues;
console.log('==============');
console.log(a);
console.log(b);

// define object with only variables
const myValue1 = 5;
const myValue2 = 6;
const myObj4 = {myValue1, myValue2};
console.log('==============');
console.log(myObj4);



//callback

function logHello() {
  console.log('hello world');
}

function logHelloWithDelay() {
  for(let i = 0; i < 10000000000; i++) {
    null;
  }
  console.log('hello world');
}

// invoke logHello after 1 ms
// however it will be invoked much later, since the for loop after the setTimeout
// takes long time and the event loop cannot be processed
// so it much more like: JS please execute this after at least 1 ms but as soon as you are free
setTimeout(logHello, 1);

for(let i = 0; i < 10000000000; i++) {
  null;
}

// if we want to execute something only specific times we can set up a counter
// WARNING: this is a global variable, can be changed anywhere else, which
// breaks our program
// WARNING 2: since we call logHelloWithDelay it takes more than 1 ms, which means
// the method calls will be enqueued in the event loop and will wait for longer time
let counter = 0;
intervalID = setInterval(function() {
  counter++;
  if(counter === 5) {
    clearInterval(intervalID);
    return;
  }
  logHelloWithDelay();
}, 1);