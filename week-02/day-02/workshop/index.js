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
function Garden(width, length){
  this.width = width;
  this.length = length;
}

Garden.prototype.area = function(){
  return this.width*this.length;
}

Garden.prototype.circumference = function(){
  return this.width*2 + this.length*2;
}

Garden.prototype.efficiency = function(){
  return this.area()/this.circumference();
}

class GardenES6{
  constructor(width, length){
    this.width = width;
    this.length = length;
  }

  area(){
    return this.width*this.length;
  }


  circumference(){
    return this.width*2 + this.length*2;
  }

  efficiency(){
    return this.area()/this.circumference();
  }

}

