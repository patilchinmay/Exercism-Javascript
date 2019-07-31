export const reverseString = (str) => {

  if (str == '') return new String('');

  // var splitString = str.split("");

  // var reverseArray = splitString.reverse();

  // var joinArray = reverseArray.join("");

  // return joinArray;

  return str.split("").reverse().join("");
};