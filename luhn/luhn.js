export class Luhn {
  constructor(input) {
    
    input = input.trim().replace(/\s+/g, '');
    input = (input.charAt(0) == '0' && input.length % 2 == 1) ? input.replace(/0/, '') : input; //replace first zero of odd length string.

    if(input.length <=1 || (input.match(/[^0-9]+/g) != null)){
      
      this._valid = false;

    }else{

      input = input.split('');
      let sum = 0;

      input.forEach((element, i) => {
        if(i%2 == 0){
          element = (element*2 > 9) ?  element*2 - 9 : element*2;
        }
        sum+= Number(element);
      });

      sum % 10 == 0 ? this._valid = true : this._valid = false;
    }

  }

  get valid() {
    return this._valid;
  }
}