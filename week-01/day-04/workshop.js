'use strict';

/*
# Post-it

 -  Create a `PostIt` a class that has
     -  a `backgroundColor`
     -  a `text` on it
     -  a `textColor`
 -  Create a few example post-it objects:
     -  an orange with blue text: "Idea 1"
     -  a pink with black text: "Awesome"
     -  a yellow with green text: "Superb!"
*/
class PostIt {
  constructor(backgroundColor, text, textColor) {
    this.backgroundColor = backgroundColor;
    this.text = text;
    this.textColor;
  }
}

const orange = new PostIt('orange', 'Idea 1', 'blue');
const pink = new PostIt('pink', 'Awesome', 'black');
const yellow = new PostIt('yellow', 'Superb', 'green');


/*
# BlogPost
- Create a `BlogPost` class that has
  - an `authorName`
  - a `title`
  - a `text`
  - a `publicationDate`
- Create a few blog post objects:
  - "Lorem Ipsum" titled by John Doe posted at "2000.05.04."
    - Lorem ipsum dolor sit amet.
  - "Wait but why" titled by Tim Urban posted at "2010.10.10."
    - A popular long-form, stick-figure-illustrated blog about almost everything.
  - "One Engineer Is Trying to Get IBM to Reckon With Trump" titled by William Turton at "2017.03.28."
    - Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.
*/
class BlogPost {
  constructor(authorName, title, text, publicationDate) {
    this.authorName = authorName;
    this.title = title;
    this.text = text;
    this.publicationDate = publicationDate;
  }
}

new BlogPost('John Doe', 'Lorem Ipsum', 'Lorem ipsum dolor sit amet.', '2000.05.04.');
new BlogPost('Tim Urban', 'Wait but why', 'A popular long-form, stick-figure-illustrated blog about almost everything.', '2010.10.10.');
new BlogPost('William Turton', 'One Engineer Is Trying to Get IBM to Reckon With Trump', 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.', '2017.03.28.');

/*
# Animal

 -  Create an `Animal` class
     -  Every animal has a `hunger` and a `thirst` value
     -  When creating a new animal object, these values are created with the default `50` value
     -  Every animal can `eat()` which decreases their hunger by one
     -  Every animal can `drink()` which decreases their thirst by one
     -  Every animal can `play()` which increases both by one
*/
class Animal {

  constructor() {
    this.hunger = 50;
    this.thirst = 50;
  }

  eat() {
    this.hunger--;
  }

  drink() {
    this.thirst--;
  }

  play() {
    this.hunger++;
    this.thirst++;
  }
}

/*
# Sharpie

 -  Create `Sharpie` class
     -  We should know each sharpie's `color`, `width` and `inkAmount`
     -  When creating one, we need to specify the `color` and the `width`
     -  Every sharpie is created with a default 100 as `inkAmount`
     -  We can `use()` the sharpie objects
     -  which decreases inkAmount
*/
class Sharpie {
  constructor(color, width, inkAmount = 100) {
    this.color = color;
    this.width = width;
    this.inkAmount = inkAmount;
  }

  use() {
    inkAmount--;
  }
}

//console.log(new Sharpie('blue', 1).inkAmount);

/*
# Counter

 -  Create a `Counter` class
     -  which has an integer property
     -  when creating it should have a default value 0 or we can specify it when creating
     -  we can `add(number)` to increase the counter's value by a whole number
     -  or we can `add()` without parameters just increasing the counter's value by one
     -  and we can `get()` the current value as string
     -  also we can `reset()` the value to the initial value
*/
class Counter {
  constructor(value = 0) {
    this.value = value;
    this.initValue = value;
  }

  add(value = 1) {
    this.value += value;
  }

  get() {
    return this.value.toString();
  }

  reset() {
    this.value = this.initValue;
  }
}

/*
Pokemon
*/
const Pokemon = require('./Pokemon');

const pokemonOfAsh = initializePokemon();

// Every pokemon has a name and a type.
// Certain types are effective against others, e.g. water is effective against fire.

// Ash has a few pokemon.
// A wild pokemon appeared!

const wildPokemon = new Pokemon('Oddish', 'leaf', 'water');
let pokemonChosen;
pokemonOfAsh.forEach((pokemon) => pokemon.effectiveAgainst === 'leaf' && pokemon.type != 'water' ? pokemonChosen = pokemon : null);
// Which pokemon should Ash use?

console.log('I choose you, ' + pokemonChosen.name);

function initializePokemon() {
  return [
    new Pokemon('Balbasaur', 'leaf', 'water'),
    new Pokemon('Pikatchu', 'electric', 'water'),
    new Pokemon('Charizard', 'fire', 'leaf'),
    new Pokemon('Balbasaur', 'water', 'fire'),
    new Pokemon('Kingler', 'water', 'fire')
  ];
}


/*
Fleet of thing
*/

const Thing = require('./thing').default;
const Fleet = require('./fleet');

const fleet = new Fleet();

// -  You have the `Thing` class
// -  You have the `Fleet` class
// -  Create the `FleetOfThings` class with a `main` method
// -  Download those, use those
// -  In the `main` method create a fleet
// -  Achieve this output:
//  Crete a fleet of things to have this output:

// 1. [ ] Get milk
// 2. [ ] Remove the obstacles
// 3. [x] Stand up
// 4. [x] Eat lunch

// Hint: You have to create a `print()` method as well
fleet.add(new Thing('Get milk'));
fleet.add(new Thing('Remove the obstacles'));
const standUp = new Thing('Stand up');
standUp.complete();
fleet.add(standUp);
const eatLunch = new Thing('Eat lunch')
eatLunch.complete();
fleet.add(eatLunch);
fleet.print();


/*
DiceSet
*/

class DiceSet {

  constructor() {
    this.numOfDices = 6;
  }

  roll() {
    this.dice = [];
    for (let i = 0; i < this.numOfDices; i++) {
      this.dice.push(Math.floor(Math.random() * 6 + 1));
    }
    return this.dice;
  }

  reroll(index) {
    if (index === undefined) {
      for (let i = 0; i < this.numOfDices; i++) {
        this.dice[i] = Math.floor(Math.random() * 6 + 1);
      }
    } else {
      this.dice[index] = Math.floor(Math.random() * 6 + 1);
    }
  }

  getCurrent(index) {
    if (index === undefined) {
      for (let i = 0; i < this.numOfDices; i++) {
        return this.dice;
      }
    } else {
      return this.dice[index];
    }
  }
}

// You have a `DiceSet` class which has a list for 6 dice
// You can roll all of them with roll(), do this first to get your array of dices
// Check the current rolled numbers with getCurrent()
// You can reroll with reroll()
// Your task is to roll the dice until all of the dice are 6

const diceSet = new DiceSet();
console.log(diceSet.roll());
console.log(diceSet.getCurrent());

console.log('------------------');

diceSet.reroll();
console.log(diceSet.getCurrent());

console.log('------------------');

console.log(diceSet.getCurrent(5));
diceSet.reroll();
console.log(diceSet.getCurrent());

console.log('------------------');

diceSet.reroll(4);
console.log(diceSet.getCurrent());

for (let i = 0; i < diceSet.numOfDices; i++) {
  while (diceSet.getCurrent(i) != 6) {
    diceSet.reroll(i);
  }
}
console.log(diceSet.getCurrent());


/*
Dominoes, Domino 💪
*/
const Domino = require('./domino');

function initializeDominoes() {
  const dominoes = [];
  dominoes.push(new Domino(5, 2));
  dominoes.push(new Domino(4, 6));
  dominoes.push(new Domino(1, 5));
  dominoes.push(new Domino(6, 7));
  dominoes.push(new Domino(2, 4));
  dominoes.push(new Domino(7, 1));
  return dominoes;
}

const dominoes = initializeDominoes();
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */

console.log(dominoes.toString());

/*
# Teacher Student

 -  Create `Student` and `Teacher` classes
 -  `Student`
     -  `learn()` -> prints the student is learning something new
     -  `question(teacher)` -> calls the teachers answer method
 -  `Teacher`
     -  `teach(student)` -> calls the students learn method
     -  `answer()` -> prints the teacher is answering a question
- Instantiate a `Student` and `Teacher` object
- Call the student's `question()` method and the teacher's `teach()` method
*/
class Student {

  learn() {
    console.log(this + 'is learning something new');
  }

  question(teacher) {
    teacher.answer();
  }

}

class Teacher {

  answer() {
    console.log(this + 'is answering a question')
  }

  teach(student) {
    student.learn();
  }

}

const student = new Student();
const teacher = new Teacher();
student.question(teacher);
teacher.teach(student);


/*
# Petrol Station

 -  Create a `Station` and a `Car` classes
 -  `Station`
     -  gasAmount
     -  refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount
 -  `Car`
     -  gasAmount
     -  capacity
     -  create constructor for `Car` where:
          -  initialize gasAmount -> 0
          -  initialize capacity -> 100
*/
class Station {

  constructor(gasAmount) {
    this.gasAmount = gasAmount;
  }

  refill(car) {
    this.gasAmount -= car.capacity - car.gasAmount;
    car.gasAmount = car.capacity;
    if(this.gasAmount<0){
      car.gasAmount += this.gasAmount
      this.gasAmount = 0;
    }
  }

}

class Car {

  constructor() {
    this.gasAmount = 0;
    this.capacity = 100;
  }
}

const station = new Station(20);
console.log(station.gasAmount);
const car = new Car();
station.refill(car);
console.log(station.gasAmount);

/*
# Sharpie Set

 -  Reuse your `Sharpie` class
 -  Create `SharpieSet` class
     -  it contains a list of Sharpie
     -  `countUsable()` -> sharpie is usable if it has ink in it
     -  `removeTrash()` -> removes all unusable sharpies
*/
class SharpieSet{

  constructor(sharpies){
    this.sharpies = sharpies;
  }

  countUsable(){
    let count = 0;
    this.sharpies.forEach(()=>Sharpie.inkAmount>0 ? count++ : null);
    return count;
  }

  removeTrash(){
    this.sharpies = this.sharpies.filter((value) => value.inkAmount>0);
  }
}

/*
#### Farm
- Reuse your `Animal` class
- Create a `Farm` class
  - it has list of Animals
  - it has slots which defines the number of free places for animals
  - breed() -> creates a new animal if there's place for it
  - slaughter() -> removes the least hungry animal
*/
class Farm{
  constructor(animals, slots){
    this.animals = animals;
    this.slots = slots
  }

  breed(){
    if(this.slots>0){
      this.animals.push(new Animal());
      this.slots--;
    }
  }

  slaughter(){
    if(this.animals.length==0){
      return;
    }

    let leastHungryAnimal = this.animals[0];
    let leastHungryAnimalIndex = 0;
    this.animals.forEach((animal, index) => {
      if(leastHungryAnimal.hunger>animal.hunger){
        leastHungryAnimal = animal;
        leastHungryAnimalIndex = index;
      }
    })
    this.animals.splice(leastHungryAnimalIndex, 1);
  }

}

/*
# Blog

 -  Reuse your `BlogPost` class
 -  Create a `Blog` class which can
     -  store a list of BlogPosts
     -  add BlogPosts to the list
     -  delete(int) one item at given index
     -  update(int, BlogPost) one item at the given index and update it with another BlogPost
*/
class Blog{
  constructor(blogPosts){
    this.blogPosts = blogPosts;
  }

  delete(int){
    this.blogPosts.splice(int, 1);
  }

  update(int, blogPost){
    this.blogPosts.splice(int, 1, blogPost);
  }
}


/*
# Pirates

Create a `Pirate` class.  While you can add other fields and methods, you must have these methods:-
 -  `drinkSomeRum()` - intoxicates the Pirate some
 -  `howsItGoingMate()` - when called, the Pirate replies, if `drinkSomeRun` was called:-
     -  0 to 4 times, "Pour me anudder!"
     -  else, "Arghh, I'ma Pirate. How d'ya d'ink its goin?", the pirate passes out and sleeps it off.

If you manage to get this far, then you can try to do the following.
     -  `die()` - this kills off the pirate, in which case, DrinkSomeRum, etc. just result in `he's dead`.
     -  `brawl(x)` - where pirate fights another pirate (if that other pirate is alive) and there's a 1/3 chance, 1 dies, the other dies or they both pass out.

And... if you get that far...

Add a parrot.

# The Pirate Ship

*The place for the Pirates*

 -  Create a `Ship` class.
 -  The `Ship` stores `Pirate`-s instances in a list as the crew and has one captain who is also a `Pirate`.
 -  When a ship is created it doesn't have a crew or a captain.
 -  The ship can be filled with pirates and a captain via `fillShip()` method.
     -  Filling the ship with a captain and random number of pirates.
 -  Ships should be represented in a nice way on command line including information about
     -  captains consumed rum, state (passed out / died)
     -  number of alive pirates in the crew
 -  Ships should have a method to battle other ships: `ship.battle(otherShip)`
     -  should return `true` if the actual ship (`this`) wins
     -  the ship should win if its calculated score is higher
     -  calculate score: Number of Alive pirates in the crew - Number of consumed rum by the captain
     -  The loser crew has a random number of losses (deaths).
     -  The winner captain and crew has a party, including a random number of rum :)

## BattleApp

 -  Create a `BattleApp` class, where you can fight with ships
 -  Create 2 ships, fill them with pirates
 -  Have a battle!

# Armada

 -  Create an `Armada` class
 -  Contains `Ship`-s as a list
 -  Have a `armada.war(otherArmada)` method where two armada can engage in war
     -  it should work like merge sort
     -  first ship from the first armada battles the first of the other
     -  the loser gets skipped so the next ship comes in play from that armada
     -  whichever armada gets to the end of its ships loses the war
     -  return `true` if `this` is the winner

## WarApp

 -  Create a `WarApp` class, where you can fight with armadas
 -  Create 2 armadas, fill them with ships
 -  Have a war!
*/
class Pirate{

  constructor(){
    this.consumedRum = 0;
    this.isDied = false;
  }

  drinkSomeRum(){
    this.consumedRum++;
  }

  howsItGoingMate(){
    if(this.consumedRum<=4){
      console.log("Pour me anudder!");
    }else{
      console.log("Arghh, I'ma Pirate. How d'ya d'ink its goin?");
    }
  }

  die(){
    this.isDied = true;
  }

  brawl(x){
    const result = Math.floor(Math.random() * 3 + 1);
    switch(result){
      case 1:
        this.die();
        break;
      case 2:
        x.die();
        break;
      case 3:
        this.die();
        x.die();
    }
  }

}

class Ship{

  constructor(){
    this.pirates = [];
    this.capitain;
  }

  fillShip(){
    const piratesNum = Math.floor(Math.random() * 100 + 5);
    for(let i=0; i<piratesNum; i++){
      this.pirates.push(new Pirate());
    }
    this.capitain = new Pirate();
  }

  getScore(){
    let score = 0;
    this.pirates.forEach((pirate) => pirate.isDied ? null:score++);
    score-=this.capitain.consumedRum;
    return score;
  }

  loss(){
    let numDeath = Math.floor(Math.random() * 100);
    for(let i=0; i<this.pirates.length && numDeath>0; i++){
      if(!this.pirates[i].isDied){
        this.pirates[i].die();
        numDeath--;
      }
    }
  }

  win(){
    this.capitain.consumedRum += Math.floor(Math.random() * 10);
  }

  battle(otherShip){
    console.log(`${this.getScore()} > ${otherShip.getScore()}`);
    if(this.getScore() > otherShip.getScore()){
      this.win();
      otherShip.loss();
      return true;
    }else{
      this.loss();
      otherShip.win();
      return false;
    }
  }
}

class BattleApp{
  constructor(){
    const ship1 = new Ship();
    ship1.fillShip();
    const ship2 = new Ship();
    ship2.fillShip();
    ship1.battle(ship2);
  }
}

class Armada{
  fillArmada(){
    this.ships = [];
    const shipsNum = Math.floor(Math.random() * 10 + 4);
    for(let i=0; i<shipsNum; i++){
      const ship = new Ship();
      ship.fillShip();
      this.ships.push(ship);
    }
  }

  war(otherArmada){
    while(true){
      if(this.ships.length===0){
        return false;
      }
      if(otherArmada.ships.length===0){
        return true;
      }

      if(this.ships[0].battle(otherArmada.ships[0])){
        otherArmada.ships.shift();
        console.log("armada1 win");
      }else{
        this.ships.shift();
        console.log("armada2 win");
      }
    }
  }

}

class WarApp{
  constructor(){
    const armada1 = new Armada();
    armada1.fillArmada();
    const armada2 = new Armada();
    armada2.fillArmada();
    armada1.war(armada2);
  }
}

const warApp = new WarApp();


/*
# Doable homework with classes
- Create 5 trees
  - Store the data of them in variables in your program
  - for every tree the program should store its'
    - type
    - leaf color
    - age
    - sex
  - you can use just variables, or lists and/or maps
*/

class Tree{
  constructor(type, leafColor, age, sex){
    this.type = type;
    this.leafColor = leafColor;
    this.age = age;
    this.sex = sex;
  }
}

const tree1 = new Tree('type1', 'color1', 10, 'sex1');
const tree2 = new Tree('type2', 'color2', 20, 'sex2');
const tree3 = new Tree('type3', 'color3', 30, 'sex3');
const tree4 = new Tree('type4', 'color4', 40, 'sex4');
const tree5 = new Tree('type5', 'color5', 50, 'sex5');