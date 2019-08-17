export const convert = (digitArray, inputBase, outputBase) => {
  let numberInDecimal = 0;
  let ansArray = [];

  if(inputBase <= 1 || inputBase == undefined || !Number.isInteger(inputBase)){
    throw new Error("Wrong input base");
  }

  if(outputBase <= 1 || outputBase == undefined || !Number.isInteger(outputBase)){
    throw new Error("Wrong output base");
  }

  if(digitArray.length == 0 || (digitArray.length > 1 && digitArray[0] == 0)){
    throw new Error("Input has wrong format");
  }

  // if((digitArray.length == 1 && digitArray[0] == 0)){
  //   return [0];
  // }

  digitArray.reverse();

  digitArray.forEach((element, index) => {
    if (element < 0 || element >= inputBase) throw new Error('Input has wrong format');
    numberInDecimal += element * (inputBase**index); 
  });

  do{
    ansArray.unshift(numberInDecimal % outputBase);
    numberInDecimal = Math.floor(numberInDecimal/outputBase);
  }while(numberInDecimal > 0);

  return ansArray;
};