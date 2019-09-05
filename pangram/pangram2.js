const ALPHABET_COUNT = 26;

export const isPangram = (input) => {
  // Convert everyhting to lowercase. Match for 26 letters. Match() returns an array with matches (which in this case are 26 aplhabets).
  input = input.toLowerCase().match(/[a-z]/g);
  // Create a set. Convert it back to array
  let setInput = [...new Set(input)];
  // Above 2 steps should result in an array lenght of 26 if the input is pangram.
  return setInput.length === ALPHABET_COUNT ? true : false;
};