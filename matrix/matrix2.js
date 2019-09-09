// Learnt a better way to do this by using map.


export class Matrix {
  constructor(input) {

    // This matrix is straightforward.
    this._rows = this.parse(input);
    // Transposing it is little tricky.
    // this.matrix[0] makes sure that we create rows in matrixTransposed equal to numbe of columns in matrix.
    // Then we get every item in column 'index' of matrix by getting the matrix and then mapping each row to return element at 'index' of that row
    this._columns = this.transpose(this._rows);

  }

  get rows() {
    return this._rows;
  }

  get columns() {
    return this._columns;
  }

  transpose(_rows) {
    return _rows[0].map((col, index) => _rows.map(row => row[index]));
  }

  parse(input){
    return input.split('\n').map(row => row.split(' ').map(element => Number(element)));
  }
}