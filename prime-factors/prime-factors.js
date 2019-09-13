export const primeFactors = (number) => {
  // console.log(`Number : ${number}`);
  let factors = [], i = 2;

  while(number > 1){
    if(number%i == 0){
      number = number / i;
      factors.push(i);
    }else{
      i++;
    }
  }
  
  // console.log(`Prime Factors : ${factors}`);
  return factors;
};
