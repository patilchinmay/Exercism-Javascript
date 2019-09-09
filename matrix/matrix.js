export class Matrix {
  constructor(input) {

    this.matrix = input.split('\n'); // row strings
    this.matrixTransposed = [];

    // Creating the matrix of ipnut. matrix.length signifies the number of rows.
    for(let i=0; i < this.matrix.length; i++){
      // Split the row string into an array. Elements of this array are still strings.
      this.matrix[i] = this.matrix[i].split(' ');
      
      for(let j=0; j < this.matrix[i].length; j++){     
      
        this.matrix[i][j] = Number(this.matrix[i][j]); // Elements converted to number
      
      }
    }

    // Transposing the matrix. matrix[0].length signifies the number of columns
    for(let i=0; i < this.matrix[0].length; i++){
      
      this.matrixTransposed[i] = [];
      
      for(let j=0; j < this.matrix.length; j++){     
        
        this.matrixTransposed[i][j] = this.matrix[j][i];
      
      }
    }

    
  }

  get rows() {
    return this.matrix;
  }

  get columns() {
    return this.matrixTransposed;
  }
}