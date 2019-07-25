export const validate = (num) => {

  if(num <= 0){
    return false;
  }
  
  let numArray = new String(num).split('');

  let power = numArray.length;

  let sum = 0;

  numArray.forEach(element => {
    sum = sum + (Number(element) ** power);
  });

  return sum == num;
};
