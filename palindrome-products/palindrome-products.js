export class Palindromes {
  static generate({minFactor, maxFactor}) {
    if (minFactor > maxFactor) throw new Error('min must be <= max');

    this.smallest = { factors: [], value: null };
    this.largest = { factors: [], value: null };

    let palindromes = [];

    for (let i = minFactor; i <= maxFactor; i++) {
      for (let j = i; j <= maxFactor; j++) {
        if(Palindromes.isPalindrome(i*j)){
          palindromes.push(i*j);
        }
      }
    }

    if(palindromes.length == 0){ return this; }

    palindromes.sort((a, b) => a - b);

    this.smallest.value = palindromes[0];
    this.smallest.factors = Palindromes.getFactors(palindromes[0], minFactor, maxFactor);
    this.largest.value = palindromes[palindromes.length - 1];
    this.largest.factors = Palindromes.getFactors(palindromes[palindromes.length - 1], minFactor, maxFactor);

    return this;
  }

  static getFactors(value, minFactor, maxFactor){
    let factors = [], i = minFactor;
    
    while(i <= Math.sqrt(value)){
      if(value % i == 0 && value/i <= maxFactor){
        factors.push([i, value/i]);
      }
      i++;
    }
    
    return factors
  }

  static isPalindrome(value){
    value += '';
    return (value === value.split('').reverse().join(''));
  }
}
