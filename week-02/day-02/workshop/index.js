//Arrow function
/*
function multiPurposeFunction(action) {
  if (action) {
    console.log(action(3));
  }
}
*/

function multiPurposeFunction(action) {
  if (action) {
    console.log(action('John', 'Smith'));
    console.log(action('', 'Bond'));
  }
}

function exampleNonAnonymFunction(param) {
  return param * param;
}

function frameFunction() {
  /*
  // this function call shows an example,
  // but it is not using anonym functions
  multiPurposeFunction(exampleNonAnonymFunction);
  // write your code here

  const anoymFunction = (x) => x*x;
  multiPurposeFunction(anoymFunction);
  */

  const anoymFunction = (a, b) => a === '' ? b : a + ' ' + b;
  multiPurposeFunction(anoymFunction);
}

frameFunction();


//Classes
function Garden(width, length) {
  this.width = width;
  this.length = length;
}

Garden.prototype.area = function () {
  return this.width * this.length;
}

Garden.prototype.circumference = function () {
  return this.width * 2 + this.length * 2;
}

Garden.prototype.efficiency = function () {
  return this.area() / this.circumference();
}

class GardenES6 {
  constructor(width, length) {
    this.width = width;
    this.length = length;
  }

  area() {
    return this.width * this.length;
  }


  circumference() {
    return this.width * 2 + this.length * 2;
  }

  efficiency() {
    return this.area() / this.circumference();
  }

}


//Class inheritance
function PlayGround(width, length, toys) {
  Garden.call(this, width, length);
  this.toys = toys;
}

PlayGround.prototype = Object.create(Garden.prototype);
PlayGround.prototype.constructor = PlayGround;

PlayGround.prototype.add = function (toy) {
  this.toys.push(toy);
}

const p = new PlayGround(1, 2, []);
p.add('asdfsa');
console.log(p.toys);


//Literals
function carWrapper(model, color, year, doors, specPropName, specPropValue) {
  // the function should create and return an object with assigning the model,
  // color year and doors to properties with the same name as the variable and
  // it should assign to the specPropName named property the specPropValue

  const car = {
    model: model,
    color: color,
    year: year,
    doors: doors,
  };
  car[specPropName] = specPropValue;

  const carES6 = {
    model: model,
    color: color,
    year: year,
    doors: doors,
    [specPropName]: specPropValue,
  }

  return carES6;

}

console.log(JSON.stringify(carWrapper('Benz', 'black', 1886, 0, 'historical', true)));
// expected output: { model: 'Benz', color: 'black', year: 1886, doors: 0, historical: true}


//Destructoring
var car = {
  model: 'Benz',
  color: 'black',
  year: 1886,
  doors: 0,
  historical: true,
};

var computer = {
  type: 'PC',
  monitor: {
    color: 'black',
    size: '16\"',
    HDMI: true,
    VGA: true,
  },
  tower: {
    color: 'grey',
    CPU: 4.7,
    memory: 16,
    SSD: 128,
  },
};

const { model, color, year, doors, historical } = car;
const { type, monitor: { computerColor, size, HDMI, VGA }, tower: { towerColor, CPU, memory, SSD } } = computer;


//Template strings
function log(timestamp, username, action) {
  return `INFO - ${timestamp}\n${username} : ${action}`;
}

console.log(log(3412, 'user', 'actiona'));


//Default
function coffee(milk = false, sugar = false) {
  if (milk && sugar) {
    return 'coffee with sugar and with milk';
  } else if (milk) {
    return 'coffee with milk';
  } else if (sugar) {
    return 'coffee with sugar';
  } else {
    return 'coffee';
  }
}

console.log(coffee());


//Rest
function foo(rowsNum, columnNum, ...rest) {

  const matrix = [];

  for (let i = 0; i < rowsNum; i++) {
    let row = [];
    for (let j = 0; j < columnNum; j++) {
      row.push(rest.shift());
    }
    matrix.push(row);
  }
  return matrix;

}

console.log(foo(2, 3, 2, 3, 2, 3, 2, 3));


//Spread
function isTriangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) { return false; }
  if (a + b <= c) { return false; }
  if (a + c <= b) { return false; }
  if (b + c <= a) { return false; }
  return true;
}
var possibleTriangles = [
  [1, 1, 1],
  [3, 4, 5],
  [1, 2, 3],
  [5, 12, 13],
  [-1, -1, -1],
];
const isTriangles = []
possibleTriangles.forEach((trig) => isTriangles.push(isTriangle(...trig)));
console.log(isTriangles);


//let + const vs. var
function average(numArray) {
  const length = numArray.length;
  return numArray.reduce((a, b) => a + b)/length;
}

console.log(average([1, 2, 4, 5]));


//For ... of
const data = [5, 1, 2, 9, 7, 3, 8];

function getMax(data){
  let max = undefined;
  for(let num of data){
    if(max===undefined || num > max){
      max = num;
    }
  }
  return max;
}

console.log(getMax(data));