const ALPHABET_COUNT = 26;

export const isPangram = (input) => {
  // Creating a string with only a-z, so that we can use set and get its size to decide if it is pangram.
  input = input.toLowerCase().replace(/[^a-z]/g, '');

  let setInput = new Set(input);
  
  return setInput.size === ALPHABET_COUNT;

};