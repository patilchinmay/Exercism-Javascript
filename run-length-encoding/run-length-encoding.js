export const encode = (str) => {
  if (str == '') return '';

  let strArray = str.split('');
  let result = '';
  let  i = 0;
  let count = 1;

  while(i < str.length){

    if(strArray[i] == strArray[i+1]){
      count++;
    }else if(strArray[i] != strArray[i+1]){
      if(count == 1){
        result += strArray[i];
      }else{
        result += String(count) + strArray[i];
        count = 1;
      }
    }
    i++;
  }

  return result;
};

function getType(c){
  if ('0123456789'.indexOf(c) !== -1) {
    return 'number';
  }else if ( (c.toLowerCase() != c.toUpperCase()) || c == ' ' ){
    return 'alphabetic';
  }
}

function getFollowingDigits(str, startindex){
  // console.log(`str type : ${typeof str} ${str}`);
  let i;
  let character = str.charAt(startindex);
  // console.log(`character : ${character}`);

  for( i = startindex+1; i < str.length ; ){

    if(getType(str.charAt(i)) == 'number'){
      // console.log(`i = ${i} str.charAt(i) : ${str.charAt(i)} = Number`);
      i++;
    }

    if(getType(str.charAt(i)) == 'alphabetic'){
      // console.log(`i = ${i} str.charAt(i) : ${str.charAt(i)} = String`);
      break;
    }
  }

  // console.log(`Final value of i : ${i}`);
  // console.log(`startindex :  stopindex = ${startindex+1} : ${i}`);

  if(startindex+1 == i){
    let result = {
      increment: 1,
      string: str.charAt(--i)
    };

    return result;
  }else{
    str = str.substring(startindex+1, i).split('').reverse().join('');
  
    let result = {
      increment: str.length+1,
      string: ''
    };

    let j = 1;
    
    while(j <= Number(str)){
      result.string += character;
      j++;
    }

    return result;
    }
}

export const decode = (str) => {
  if (str == '') return '';

  let result = '';
  let  i = 0;

  str = str.split('').reverse().join('');

  for (i = 0; i < str.length ; ){

    let temp = getFollowingDigits(str, i)
    result += temp.string;
    i+= parseInt(temp.increment);

  }

  return result.split('').reverse().join('');
};