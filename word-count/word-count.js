export class Words {
    count(input) {
      let inputArray = (input.toLowerCase().trim().split(/\s+/));
      let inputSet = [...new Set(inputArray)];
      let answer = {}
  
      inputSet.map(element => {answer[element] = 0});
  
      inputArray.map(element => {answer[element]++});
  
      return answer;
    }
}