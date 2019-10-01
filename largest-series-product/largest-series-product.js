export const largestProduct = (numberString, subStringLength) => {
  if(numberString.length < subStringLength) throw new Error('Slice size is too big.');
  if(subStringLength == 0) return 1;
  if(subStringLength < 0 || (numberString.match(/[^0-9]/g) != null )) throw new Error('Invalid input.');

  let largestProduct = 0;

  for (let i = 0; i+subStringLength <= (numberString.length); i++) {
    // Create a substing of required length
    let subString = numberString.substring(i, i+subStringLength);
    // Convert the substing to array of numbers
    let numbers = subString.split('').map(value => Number(value));
    // Get the product of all numbers of the array
    let product = numbers.reduce((mul, currentValue)=> mul*currentValue, 1);
    
    if(product > largestProduct){
      largestProduct = product;
    }
  }

  return largestProduct;
};
