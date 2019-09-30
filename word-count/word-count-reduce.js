export class Words {
  count(input) {
    let inputArray = (input.toLowerCase().trim().split(/\s+/));
  
    return inputArray.reduce((answer,element) => {
      answer[element] = answer.hasOwnProperty(element) ? answer[element]++ : 1;
      return answer;
    },{})

  }
}