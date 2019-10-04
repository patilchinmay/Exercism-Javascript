export class Triangle {
  constructor(size) {
    this.triangle = [];
    this.size = size;

    for (let i = 0; i < this.size; i++) {
      this.triangle[i] = [];

      for (let j = 0; j <= i; j++) {  
        if (j == 0 || j == i) {
          this.triangle[i][j] = 1;
          continue; //Skips the further execution of loop when condition is met
        }
        this.triangle[i][j] = this.triangle[i-1][j]+this.triangle[i-1][j-1];
      }
    }
  }

  get lastRow() {
    return this.triangle[this.triangle.length-1];
  }

  get rows() {
    return this.triangle;
  }
}
