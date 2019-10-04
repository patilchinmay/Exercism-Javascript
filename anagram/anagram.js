export class Anagram {
  constructor(input) {
    this.input = input;
  }

  matches(array) {
    return array.reduce((anagrams, element) =>{
      if(this.input.toLowerCase() !== element.toLowerCase()){
        if(this.input.toLowerCase().split('').sort().join('') === element.toLowerCase().split('').sort().join('')){
          anagrams.push(element);
        }
      }
      return anagrams;
    }, []);
  }
}
