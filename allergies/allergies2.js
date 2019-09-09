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

    let remainder = 0;

    do{
      remainder = input%2;
      this.allergiesOfPerson.unshift(remainder);
      input = Math.floor(input/2);
    }while(input > 0)

    if(this.allergiesOfPerson.length > 8){
      this.allergiesOfPerson.splice(0, this.allergiesOfPerson.length-8);
    }

    this.allergiesOfPerson.reverse();

    this.allergiesOfPerson = this.allergiesOfPerson.reduce((array, element, index)=>{
      if(element == 1) {
        array.push(this.allergies[index]);
      }
      return array;
    }, []);

  }

  list() {
    return this.allergiesOfPerson
  }

  allergicTo(allergy) {
    return this.allergiesOfPerson.indexOf(allergy) != -1 ? true : false;
  }
}
