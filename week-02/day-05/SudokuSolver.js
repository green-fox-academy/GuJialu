class SudokuSolver {

  constructor() {
    //this.puzzle = sudoku.puzzle;
  }

  isValid(num, i, j) {
    return this.isValidOnRow(num, i) && this.isValidOnColumn(num, j) && this.isValidOnSqure(num, i, j);
  }

  isValidOnRow(num, i) {
    for (let j = 0; j < 9; j++) {
      if (num === this.puzzle[i][j]) {
        return false;
      }
    }
    return true;
  }

  isValidOnColumn(num, j) {
    for (let i = 0; i < 9; i++) {
      if (num === this.puzzle[i][j]) {
        return false;
      }
    }
    return true;
  }

  isValidOnSqure(num, i, j) {
    const squrei = Math.floor(i / 3) * 3;
    const squrej = Math.floor(j / 3) * 3;
    for (let ii = squrei; ii < squrei + 3; ii++) {
      for (let jj = squrej; jj < squrej + 3; jj++) {
        if (num === this.puzzle[ii][jj]) {
          return false;
        }
      }
    }
    return true;
  }

  solve(sudoku) {
    this.puzzle = sudoku.puzzle;
    this.solveR();
  }

  solveR() {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {

        if (this.puzzle[i][j] === '_') {
          for (let n = 1; n < 10; n++) {
            if (this.isValid(n.toString(), i, j)) {
              this.puzzle[i][j] = n.toString();
              if (this.solveR()) {
                return true;
              } else {
                this.puzzle[i][j] = '_';
              }
            }
          }
          return false;
        }

      }
    }
    return true;
  }


}

const Sudoku = require('./Sudoku');
const sudoku = new Sudoku('week-02/day-05/Input.txt');
console.log(sudoku.toString());
const solver = new SudokuSolver();

console.time('Solution found in');
solver.solve(sudoku);
console.timeEnd('Solution found in');
console.log(sudoku.toString());