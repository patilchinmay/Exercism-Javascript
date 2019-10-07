export const isIsogram = (input) => {
  //Replace whitespaces and hyphen
  input = input.replace(/\s+|-/g, '').toLowerCase();
  return input.length == new Set(input).size;
};
