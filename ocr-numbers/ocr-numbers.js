const ocr = {
  ' _ \n| |\n|_|\n   '  : "0",
  '   \n  |\n  |\n   '  : "1",
  ' _ \n _|\n|_ \n   '  : "2",
  ' _ \n _|\n _|\n   '  : "3",
  '   \n|_|\n  |\n   '  : "4",
  ' _ \n|_ \n _|\n   '  : "5",
  ' _ \n|_ \n|_|\n   '  : "6",
  ' _ \n  |\n  |\n   '  : "7",
  ' _ \n|_|\n|_|\n   '  : "8",
  ' _ \n|_|\n _|\n   '  : "9"
}

const OCR_HEIGHT = 4

export const convert = (input) => {
  if(input.split('\n').length == 4){

    let number_of_digits = Math.floor(input.split('\n')[0].length / 3);

    if(number_of_digits == 1){
      return parseSingleDigit(input);
    }

    if(number_of_digits > 1){
      return parseMultipleDigits(input);
    }

  }else if(input.split('\n').length % 4 == 0){

    let multiLineInput = input.split('\n');

    let number_of_rows = multiLineInput.length;

    let separatedMultilineInputs = [];

    for(let k = 0; k < number_of_rows/OCR_HEIGHT; k++){

      separatedMultilineInputs[k] = '';

      for (let j = 0; j < OCR_HEIGHT; j++) {
        
        let index = k*4 + j;
        //Adding the newline char (at each row-end except the last one) which get removed in splitting input .
        if(j != 3) multiLineInput[index] += `\n`;
      
        separatedMultilineInputs[k] += multiLineInput[index];
      }
    }

    let answer = separatedMultilineInputs.map(value => parseMultipleDigits(value));

    return answer.join(',');

  }
  
};

function parseSingleDigit(element){
  let answer = '';

  if(ocr[element] == undefined){
    answer += '?';
  }else{
    answer += ocr[element];
  }

  return answer;
}

function parseMultipleDigits(input){
  let number_of_digits = Math.floor(input.split('\n')[0].length / 3);

  let rows = input.split('\n');

  // Splitting each row into array of size 3. rows becomes 2D array.
  rows = rows.map((row) => row.match(/(.{1,3})/g));

  // initialize digits array with empty string
  let digits  = [];
  for(let k = 0; k < number_of_digits; k++){
    digits[k] = '';
  }

  // Merging the horizontally split arrays into verical strings.
  for(let i = 0; i < rows.length; i++){
    for(let j = 0; j < number_of_digits; j++){
      //Adding the newline char (at each row-end except the last one) which get removed in splitting input .
      if(i != rows.length-1) rows[i][j] += `\n`;
      digits[j] += rows[i][j];
    }
  }

  let answer = digits.map(value => parseSingleDigit(value));

  return answer.join('');
}