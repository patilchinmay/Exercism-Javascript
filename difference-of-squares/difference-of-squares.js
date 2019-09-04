// sum of n = n * (n+1) /2
// sum of squares till n = n * (n+1) * (2n+1) / 6

export class Squares {
  constructor(numbers) {
    this._sumOfSquares = 0;
    this._sum = 0;

    for(let i = 1; i <= numbers ; i++){
      this._sumOfSquares += i**2
      this._sum += i;
    } 

    this._squareOfSum = this._sum**2;
  }

  get sumOfSquares() {
    return this._sumOfSquares;
  }

  get squareOfSum() {
    return this._squareOfSum;
  }

  get difference() {
    return this._squareOfSum - this._sumOfSquares;
  }
}
