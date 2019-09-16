export class HighScores {
  constructor(input) {
    this._scores = input;
  }

  get scores() {
    return this._scores;
  }

  get latest() {
    return this._scores[this._scores.length-1];
  }

  get personalBest() {
    return this._scores.sort((a,b)=>b-a)[0];
  }

  get personalTopThree() {
    if(this._scores.length < 3){
      return this._scores.sort((a,b)=>b-a)
    }else{
      return this._scores.sort((a,b)=>b-a).slice(0, 3);
    }
  }
}
