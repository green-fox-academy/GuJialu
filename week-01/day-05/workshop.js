/*
# Green Fox inheritance exercise

## Person

Create a `Person` class with the following fields:

- `name`: the name of the person
- `age`: the age of the person (integer number)
- `gender`: the gender of the person (male / female)

And the following methods:

- `introduce()`: prints out 'Hi, I'm `name`, a `age` year old `gender`.'
- `getGoal()`: prints out 'My goal is: Live for the moment!'

And the following constructors:

- `Person(name, age, gender)`
- `Person()`: sets `name` to Jane Doe, `age` to 30, `gender` to female
*/
class Person {
  constructor(name = 'Jane Doe', age = 30, gender = 'female') {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender}.`);
  }

  getGoal() {
    console.log('My goal is: Live for the moment!');
  }
}


/*
## Student

Create a `Student` class that has the same fields and methods as the `Person`
class, and has the following additional

- fields:
  - `previousOrganization`: the name of the student’s previous company / school
  - `skippedDays`: the number of days skipped from the course
- methods:
  - `getGoal()`: prints out 'My goal is: Be a junior software developer.'
  - `introduce()`: 'Hi, I'm `name`, a `age` year old `gender` from
    `previousOrganization` who skipped `skippedDays` days from the course
    already.'
  - `skipDays(numberOfDays)`: increases `skippedDays` by `numberOfDays`

The `Student` class has the following constructors:

- `Student(name, age, gender, previousOrganization)`: beside the given
  parameters, it sets `skippedDays` to 0
- `Student()`: sets `name` to Jane Doe, `age` to 30, `gender` to female,
  `previousOrganization` to The School of Life, `skippedDays` to 0
*/

class Student extends Person {

  constructor(name = 'Jane Doe', age = 30, gender = 'female', previousOrganization = 'The School of Life') {
    super(name, age, gender);
    this.previousOrganization = previousOrganization;
    this.skippedDays = 0;
  }

  getGoal() {
    console.log('My goal is: Be a junior software developer.');
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`);
  }

  skipDays(numberOfDays) {
    this.skippedDays -= numberOfDays;
  }
}

/*
## Mentor

Create a `Mentor` class that has the same fields and methods as the `Person`
class, and has the following additional

- fields:
  - `level`: the level of the mentor (junior / intermediate / senior)
- methods:
  - `getGoal()`: prints out 'My goal is: Educate brilliant junior software
    developers.'
  - `introduce()`: 'Hi, I'm `name`, a `age` year old `gender` `level` mentor.'

The `Mentor` class has the following constructors:

- `Mentor(name, age, gender, level)`
- `Mentor()`: sets `name` to Jane Doe, `age` to 30, `gender` to female, `level`
  to intermediate
*/
class Mentor extends Person {
  constructor(name = 'Jane Doe', age = 30, gender = 'female', level = 'intermediate') {
    super(name, age, gender);
    this.level = level;
  }

  getGoal() {
    console.log('My goal is: Educate brilliant junior software developers.');
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor.`);
  }
}


/*
## Sponsor

Create a `Sponsor` class that has the same fields and methods as the `Person`
class, and has the following additional

- fields:
  - `company`: name of the company
  - `hiredStudents`: number of students hired
- method:
  - `introduce()`: 'Hi, I'm `name`, a `age` year old `gender` who represents
    `company` and hired `hiredStudents` students so far.'
  - `hire()`: increase `hiredStudents` by 1
  - `getGoal()`: prints out 'My goal is: Hire brilliant junior software
    developers.'

The `Sponsor` class has the following constructors:

- `Sponsor(name, age, gender, company)`: beside the given parameters, it sets
  `hiredStudents` to 0
- `Sponsor()`: sets `name` to Jane Doe, `age` to 30, `gender` to female,
  `company` to Google and `hiredStudents` to 0
*/
class Sponsor extends Person {

  constructor(name = 'Jane Doe', age = 30, gender = 'female', company = 'Google') {
    super(name, age, gender);
    this.company = company;
    this.hiredStudents = 0;
  }

  getGoal() {
    console.log('My goal is: Hire brilliant junior software developers.');
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`);
  }

  hire() {
    this.hiredStudents++;
  }
}


/*
## Cohort

Create a `Cohort` class that has the following

- fields:
  - `name`: the name of the cohort
  - `students`: a list of `Student`s
  - `mentors`: a list of `Mentor`s
- methods:
  - `addStudent(Student)`: adds the given `Student` to `students` list
  - `addMentor(Mentor)`: adds the given `Mentor` to `mentors` list
  - `info()`: prints out 'The `name` cohort has `students.size` students and
    `mentors.size` mentors.'

The `Cohort` class has the following constructors:

- `Cohort(name)`: beside the given parameter, it sets `students` and `mentors`
  as empty lists
*/
class Cohort {

  constructor(name) {
    this.name = name;
    this.students = [];
    this.mentors = [];
  }

  addStudent(Student) {
    this.students.push(Student);
  }

  addMentor(Mentor) {
    this.mentors.push(Mentor);
  }

  info() {
    console.log(`The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors.`)
  }
}


/*
## Test input
*/
const people = [];

const mark = new Person('Mark', 46, 'male');
people.push(mark);

const jane = new Person();
people.push(jane);

const john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);

const student = new Student();
people.push(student);

const gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);

const mentor = new Mentor();
people.push(mentor);

const elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);

const sponsor = new Sponsor();
people.push(sponsor);

student.skipDays(3);

for (let i = 0; i < 6; i++) {
  elon.hire();
}

for (let i = 0; i < 4; i++) {
  sponsor.hire();
}

people.forEach((person) => {
  person.introduce();
  person.getGoal();
})

const awesome = new Cohort('AWESOME');
awesome.addStudent(student);
awesome.addStudent(john);
awesome.addMentor(mentor);
awesome.addMentor(gandhi);
awesome.info();


/*
## Test output

Hi, I'm Mark, a 46 year old male.
My goal is: Live for the moment.
Hi, I'm Jane Doe, a 30 year old female.
My goal is: Live for the moment.
Hi, I'm John Doe, a 20 year old male from BME who skipped 0 days from the course already.
My goal is: Be a junior software developer.
Hi, I'm Jane Doe, a 30 year old female from The School of Life who skipped 3 days from the course already.
My goal is: Be a junior software developer.
Hi, I'm Gandhi, a 148 year old male senior mentor.
My goal is: Educate brilliant junior software developers.
Hi, I'm Jane Doe, a 30 year old female intermediate mentor.
My goal is: Educate brilliant junior software developers.
Hi, I'm Elon Musk, a 46 year old male who represents SpaceX and hired 6 students so far.
My goal is: Hire brilliant junior software developers.
Hi, I'm Jane Doe, a 30 year old female who represents Google and hired 4 students so far.
My goal is: Hire brilliant junior software developers.
The AWESOME cohort has 2 students and 2 mentors.
*/

/*
# The Garden Application

The task is to create a garden application, so in your main method you should
create a garden with flowers and trees. The program should demonstrate an
example garden with two flowers (yellow and blue) and two trees (purple and
orange). In the example after creating them you should show the user, how the
garden looks like. After that the program should water the garden twice, first
with the amount of `40` then with `70`. And after every watering the user should
see the state of the garden as you can see in the output.

The output should look like this:

```text
The yellow Flower needs water
The blue Flower needs water
The purple Tree needs water
The orange Tree needs water

Watering with 40
The yellow Flower doesnt need water
The blue Flower doesnt need water
The purple Tree needs water
The orange Tree needs water

Watering with 70
The yellow Flower doesnt need water
The blue Flower doesnt need water
The purple Tree doesnt need water
The orange Tree doesnt need water
```

## Information on the elements

- The Garden
  - is able to hold unlimited amount of flowers or trees
  - when watering it should only water those what needs water with equally
    divided amount amongst them
  - eg. watering with 40 and 4 of them need water then each gets watered with 10
- The Flower
  - needs water if its current water amount is less then 5
  - when watering it the flower can only absorb the 75% of the water
  - eg. watering with 10 the flower's amount of water should only increase with
    7.5
- The Tree
  - needs water if its current water amount is less then 10
  - when watering it the tree can only absorb the 40% of the water
  - eg. watering with 10 the tree's amount of water should only increase with 4
*/
class Plant {

  constructor(color, absorbLevel, needsWaterLevel) {
    this.color = color;
    this.currentWaterAmount = 0;
    this.absorbLevel = absorbLevel;
    this.needsWaterLevel = needsWaterLevel;
  }

  water(amount) {
    this.currentWaterAmount += this.absorbLevel * amount;
  }

  toString() {
    const needsWater = this.currentWaterAmount > this.needsWaterLevel ?
      'doesn\'t need' :
      'needs';
    return `The ${this.color} ${this.constructor.name} ${needsWater} water`;
  }

}

class Flower extends Plant {
  constructor(color) {
    super(color, 0.75, 5);
  }
}

class Tree extends Plant {
  constructor(color) {
    super(color, 0.4, 10);
  }
}

class Garden {

  constructor() {
    this.plants = [];
  }

  add(plant) {
    this.plants.push(plant);
  }

  water(amount) {
    const plantsNeedWater = this.plants.filter((plant) => plant.currentWaterAmount < plant.needsWaterLevel)
    const waterAmountEach = amount / plantsNeedWater.length;
    plantsNeedWater.forEach((plant) => plant.water(waterAmountEach));
  }

  toString(){
    this.plants.forEach((plant) => console.log(plant.toString()));
  }

}

const garden = new Garden();
garden.add(new Tree('yellow'));
garden.add(new Tree('green'));
garden.add(new Flower('pulper'));
garden.add(new Flower('red'));

garden.toString();
console.log('------------------------------');
garden.water(40);
console.log('------------------------------');
garden.toString();


/*
# Aircraft Carrier

## Aircrafts

- Create a class that represents an aircraft
- There are 2 types of aircrafts: `F16` and `F35`
- Both aircrafts should keep track of their ammunition

### F16

- Max ammo: 8
- Base damage: 30

### F35

- Max ammo: 12
- Base damage: 50

All aircrafts should be created with an empty ammo storage

### Methods

#### fight

- It should use all the ammo (set it to 0) and it should return the damage it
  deals
- The damage dealt is calculated by multiplying the base damage by the
  ammunition

#### refill

- It should take a number as parameter and subtract as much ammo as possible
- It can't have more ammo than the number or the max ammo (can't get more ammo
  than what's coming from the parameter or the max ammo of the aircraft)
- It should return the remaining ammo
- Eg. Filling an empty F35 with `300` would completely fill the storage of the
  aircraft and would return the remaining `288`

#### getType

- It should return the type of the aircraft as a string

#### getStatus

- It should return a string like:
  `Type F35, Ammo: 10, Base Damage: 50, All Damage: 500`

#### isPriority

- It should return if the aircraft is priority in the ammo fill queue. It's
  `true` for F35 and `false` for F16

## Carrier

Create a class that represents an aircraft-carrier

- The carrier should be able to store aircrafts
- Each carrier should have a store of ammo represented as number
- The initial ammo should be given by a parameter in its constructor
- The carrier also has a health point given in its constructor as well

### Methods

#### add

- It should take a new aircraft and add it to its storage

#### fill

- It should fill all the aircraft with ammo and subtract the needed ammo from
  the ammo storage
- If there is not enough ammo then it should start to fill the aircrafts with
  priority first
- If there is no ammo when this method is called, it should throw an exception

#### fight

- It should take another carrier as a reference parameter and fire all the ammo
  from the aircrafts to it, then subtract all the damage from its health points

#### getStatus

It should return a string about itself and all of its aircrafts' statuses in the
following format:

```text
HP: 5000, Aircraft count: 5, Ammo Storage: 2300, Total damage: 2280
Aircrafts:
Type F35, Ammo: 12, Base Damage: 50, All Damage: 600
Type F35, Ammo: 12, Base Damage: 50, All Damage: 600
Type F35, Ammo: 12, Base Damage: 50, All Damage: 600
Type F16, Ammo: 8, Base Damage: 30, All Damage: 240
Type F16, Ammo: 8, Base Damage: 30, All Damage: 240
```

If the health points are 0 then it should return: `It's dead Jim :(`
*/

class Aircraft {
  constructor(maxAmmo, baseDamage, isPriority, type) {
    this.maxAmmo = maxAmmo;
    this.baseDamage = baseDamage;
    this.isPriority = isPriority;
    this.type = type;
    this.ammoStorage = 0;
  }

  fight() {
    const damage = this.baseDamage * this.ammoStorage;
    this.ammoStorage = 0;
    return damage;
  }

  refill(fillAmount) {
    let remainingAmmo = fillAmount - (this.maxAmmo - this.ammoStorage);
    this.ammoStorage = this.maxAmmo;
    if (remainingAmmo < 0) {
      this.ammoStorage += remainingAmmo;
      remainingAmmo = 0;
    }
    return remainingAmmo;
  }

  getType() {
    return this.type;
  }

  getStatus() {
    return `Type ${this.constructor.name}, Ammo: ${this.ammoStorage}, Base Damage: ${this.baseDamage}, All Damage: ${this.ammoStorage * this.baseDamage}`;
  }

  getIsPriority() {
    return this.isPriority;
  }

}

class F16 extends Aircraft {

  constructor() {
    super(8, 30, false, 'f16');
  }

}

class F35 extends Aircraft {

  constructor() {
    super(12, 50, true, 'f35');
  }

}

class Carrier {

  constructor(ammoStorage, HP) {
    this.ammoStorage = ammoStorage;
    this.HP = HP;
    this.aircrafts = [];
  }

  add(aircraft) {
    this.aircrafts.push(aircraft);
  }

  fill() {

    if (this.ammoStorage == 0) {
      throw 'no ammo';
    }

    this.aircrafts.forEach((aircraft) => {
      if (this.ammoStorage == 0) {
        return;
      }
      if (aircraft.getIsPriority()) {
        this.ammoStorage = aircraft.refill(this.ammoStorage);
      }
    });

    this.aircrafts.forEach((aircraft) => {
      if (this.ammoStorage == 0) {
        return;
      }
      if (!aircraft.getIsPriority()) {
        this.ammoStorage = aircraft.refill(this.ammoStorage);
      }
    });

  }

  fight(carrier) {
    this.aircrafts.forEach((aircraft) => carrier.HP -= aircraft.fight());
  }

  getStatus() {
    if (this.HP <= 0) {
      console.log('It\'s dead Jim :(');
    } else {
      this.aircrafts.forEach((aircraft) => console.log(aircraft.getStatus()));
    }
  }

}

const carrier1 = new Carrier(20, 10000);
carrier1.add(new F35());
carrier1.add(new F35());
carrier1.add(new F16());
carrier1.add(new F16());
carrier1.fill();
carrier1.getStatus();
carrier1.fight(new Carrier(20, 10000));
carrier1.getStatus();
carrier1.fill();
