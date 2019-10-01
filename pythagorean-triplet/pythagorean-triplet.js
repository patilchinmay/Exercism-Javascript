export class Triplet {
  constructor(a,b,c) {
    this._sum = a+b+c;
    this._product = a*b*c;
    this._isPythagorean = (a*a + b*b) == c*c ;
  }

  sum() {
    return this._sum;
  }

  product() {
    return this._product;
  }

  isPythagorean() {
    return this._isPythagorean
  }
  
  static where({minFactor, maxFactor, sum}) {
    minFactor = minFactor || 1;
    maxFactor = maxFactor || 100;
    var triplets = [];
    for (let a = minFactor; a <= maxFactor; a++) {
      for (let b = a; b <= maxFactor; b++) {
        for (let c = b; c <= maxFactor; c++) {
          let triplet = new Triplet(a, b, c);
          if (triplet.isPythagorean() && (!sum || triplet.sum() == sum)) {
              triplets.push(triplet);
          }
        }
      }
    }
    return triplets;
  }
}
