class SudokuSolver{
  isValid(num, i, j){
    return this.isValidOnRow(num, i) && this.isValidOnColumn(num, j) && this.isValidOnSqure(num, i, j);
  }

  isValidOnRow(num, i){
    for(let j=0; j<9; j++){
      if(num === this.puzzle[i][j]){
        return false;
      }
    }
    return true;
  }

  isValidOnColumn(num, j){
    for(let i=0; i<9; i++){
      if(num === this.puzzle[i][j]){
        return false;
      }
    }
    return true;
  }

  isValidOnSqure(num, i, j){
    const squrei = Math.floor(i/3)*3;
    console.log(squrei);
    const squrej = Math.floor(j/3)*3;
    console.log(squrej);
    for(let ii = squrei; ii<squrei+3; ii++){
      for(let jj = squrej; jj<squrej+3; jj++){
        console.log(this.puzzle[ii][jj]);
        if(num === this.puzzle[ii][jj]){
          return false;
        }
      }
    }
    return true;
  }
}