export class Allergies {
  constructor(input) {

    this.allergies = [
      'eggs',
      'peanuts',
      'shellfish',
      'strawberries',
      'tomatoes',
      'chocolate',
      'pollen',
      'cats'
    ]

    this.allergiesOfPerson = []

    let remainder = 0, counter = 0;

    // Taking factors of 2 of input
    do{
      remainder = input%2;

      // updating allergiesOfPerson with respective allergy if the factor is 1. Ignoring if the factor is 0.
      if(counter <= 7 && remainder == 1){
        this.allergiesOfPerson.push(this.allergies[counter]);
      }

      input = Math.floor(input/2);
      counter++;
    }while(input > 0)

  }

  list() {
    return this.allergiesOfPerson
  }

  allergicTo(allergy) {
    return this.allergiesOfPerson.indexOf(allergy) != -1 ? true : false;
  }
}
