export class Triangle {
  constructor(side1, side2, side3) {
    // Declared with this.XXX so that it goes into scope of class and then we can to use it outside of the constructor in an another function.
    this.type;

    // Sort the array of sides
    let sides = [side1, side2, side3].sort(function(a, b){return a - b});

    // Invalid triangle
    if(sides[0] <= 0 || (sides[0] + sides[1] <= sides[2]) ){
      this.type  = 'invalid';
      // if we don't return here. Program will go ahead and also execute below code. It will create problems. e.g. (0,0,0) will be equilateral triangle instead of invalid.
      return;
    }

    // Valid triagle.
    if(sides[0] == sides[1] && sides[1] == sides[2]){
      this.type  = 'equilateral';
    } else if(sides[0] != sides[1] && sides[1] != sides[2] && sides[2] != sides[0]){
      this.type  = 'scalene';
    } else if(sides[1] == sides[0] || sides[1] == sides[2]){
      this.type  = 'isosceles';
    }
  }

  kind() {
    if(this.type  === 'invalid') throw new Error("Invalid sides. Not a triangle!");

    return this.type;
  }

}

// const triangle = new Triangle(0,0,0);
// console.log(`Type : ${triangle.kind()}`);