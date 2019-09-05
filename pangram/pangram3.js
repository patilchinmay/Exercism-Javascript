const ALPHABET_COUNT = 26;

function isAlphabet(element){
  if(element.match(/[a-z]/i) === null){
    return false;
  }else{
    return true;
  }
}

export const isPangram = (input) => {
  // Convert everyhting to lowercase
  input = input.toLowerCase();
  // Create a set, eliminating duplicates. Convert it back to array
  let setInput = [...new Set(input)];
  // Check every element if it is an alphabet. Discard if it isn't.
  let setResult = setInput.filter(isAlphabet);
  // Above 3 steps should result in an array lenght of 26 if the input is pangram.
  return setResult.length === ALPHABET_COUNT ? true : false;
};