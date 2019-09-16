class Luhn {
  constructor(input) {
    input = input.trim().replace(/\s+/g, '');
    console.log(`input = ${input}`);

    if(input.length <=1 || (input.match(/[^0-9]+/g) != null)){
      this._valid = false;
      console.log(`Failed condition!`);
    }else{

      input = input.split('');
      let sum = 0;

      for(let i = 0; i < input.length; i++){
        if(i%2 == 0){
          input[i] = (input[i]*2 > 9) ?  input[i]*2 - 9 : input[i]*2;
        }
        sum+= Number(input[i]);
      }
      console.log(`input_modified = ${input}`);
      sum % 10 == 0 ? this._valid = true : this._valid = false;
      console.log(`sum = ${sum} this._valid = ${this._valid}`);
    }

  }

  get valid() {
    return this._valid;
  }
}

console.log(new  Luhn('055a 444 285').valid);