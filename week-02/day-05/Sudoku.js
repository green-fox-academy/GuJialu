const fs = require('fs');

class Sudoku {

  constructor(inputFile) {
    this.puzzle = [];
    try {
      const fileContent = fs.readFileSync(inputFile, 'UTF-8');
      const rows = fileContent.split('\n');
      for (let row of rows) {
        const nums = row.split(' ');
        this.puzzle.push(nums);
      }
    } catch (err) {
      console.log(err);
      return;
    }
  }

  toString() {
    let str = '';
    for (let row of this.puzzle) {
      for (let num of row) {
        str += num + ' ';
      }
      str += '\n';
    }
    return str;
  }

}

module.exports = Sudoku;
