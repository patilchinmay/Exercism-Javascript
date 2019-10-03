export const transpose = (input) => {
  if(input.length == 0) return [];
  
  // Find the longest row length.
  let longestRowLength = input.reduce((longestRowLength, currentValue)=>{
    if(longestRowLength < currentValue.length){
      longestRowLength  = currentValue.length;
    }
    return longestRowLength;
  }, 0);

  // Pad the row to match longestRowLength
  input = input.map((currentValue)=>{
    currentValue = currentValue.split('');
    if(currentValue.length < longestRowLength){
      let paddingLength = longestRowLength-currentValue.length;
      for (let i = 0; i < paddingLength; i++) {
        currentValue.push(' ');
      }
    }
    return currentValue;
  });

  // Transpose the matrix
  let transposedMatrix = input[0].map( (col, index) => {return input.map( (row) => {return row[index]}).join('')} );
  // Replace the last item's padded whitespaces at the end.
  transposedMatrix[transposedMatrix.length-1] = transposedMatrix[transposedMatrix.length-1].replace(/\s+$/i, '');
  
  return transposedMatrix;
};