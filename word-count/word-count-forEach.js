export class Words {
  count(input) {
    let inputArray = input.toLowerCase().trim().split(/\s+/);
    // let inputSet = [...new Set(inputArray)];
    let answer = {}

    // inputSet.map(element => {answer[element] = 0});

    inputArray.forEach(element => {
      if(answer.hasOwnProperty(element)){
        answer[element]++
      }else{
        answer[element] = 1
      }
    });

    return answer;
  }
}
