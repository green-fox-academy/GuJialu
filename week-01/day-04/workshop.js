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


/*
# Animal

 -  Create an `Animal` class
     -  Every animal has a `hunger` and a `thirst` value
     -  When creating a new animal object, these values are created with the default `50` value
     -  Every animal can `eat()` which decreases their hunger by one
     -  Every animal can `drink()` which decreases their thirst by one
     -  Every animal can `play()` which increases both by one
*/


/*
# Sharpie

 -  Create `Sharpie` class
     -  We should know each sharpie's `color`, `width` and `inkAmount`
     -  When creating one, we need to specify the `color` and the `width`
     -  Every sharpie is created with a default 100 as `inkAmount`
     -  We can `use()` the sharpie objects
     -  which decreases inkAmount
*/


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

// Which pokemon should Ash use?

console.log('I choose you, ');

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

const Thing = require('./thing');
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

/*
# Sharpie Set

 -  Reuse your `Sharpie` class
 -  Create `SharpieSet` class
     -  it contains a list of Sharpie
     -  `countUsable()` -> sharpie is usable if it has ink in it
     -  `removeTrash()` -> removes all unusable sharpies
*/


/*
#### Farm
- Reuse your `Animal` class
- Create a `Farm` class
  - it has list of Animals
  - it has slots which defines the number of free places for animals
  - breed() -> creates a new animal if there's place for it
  - slaughter() -> removes the least hungry animal
*/


/*
# Blog

 -  Reuse your `BlogPost` class
 -  Create a `Blog` class which can
     -  store a list of BlogPosts
     -  add BlogPosts to the list
     -  delete(int) one item at given index
     -  update(int, BlogPost) one item at the given index and update it with another BlogPost
*/


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