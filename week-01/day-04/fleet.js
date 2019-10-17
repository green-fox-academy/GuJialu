class Fleet {

  constructor() {
    this.things = [];
  }

  add(thing) {
    this.things.push(thing);
  }

  getThings() {
    return this.things;
  }

  print() {
    this.things.forEach((thing) => console.log(`[${thing.getCompleted()?'x':' '}] ${thing.name}`));
  }
}

module.exports = Fleet;