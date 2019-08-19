export class Clock {
  constructor(hour, minutes) {
    this.ans_minutes;
    this.ans_hour;
    this.minutes_quotient = 0;

    if(minutes < 0){

      this.minutes_quotient = Math.floor(minutes/60);

      minutes = 60 + minutes%60;
      if(minutes == 60) minutes = 0;
    }

    this.ans_minutes = this.getMinutes(minutes);

    if(this.minutes_quotient != 0){
      hour = hour + this.minutes_quotient%24;
    }

    if(hour < 0){
      hour = 24 + hour%24;
    }

    this.ans_hour = this.getHours(hour);

  }

  getMinutes(minutes){
    let ans_minutes;
    switch (true){
      case (minutes === undefined):
        ans_minutes = '00';
        break;
      
      case (minutes >= 0 && minutes <= 9):
        ans_minutes = `0${minutes}`;
        break;

      default:
        ans_minutes = minutes%60;

        if(ans_minutes == 0){
          ans_minutes = '00';
        }else if(ans_minutes >= 0 && ans_minutes <= 9){
          ans_minutes = `0${ans_minutes}`;
        }else{
          ans_minutes = `${ans_minutes}`;
        }
        this.minutes_quotient += Math.floor(minutes/60);
    }

    return ans_minutes;
  }

  getHours(hour){
    let ans_hour;
    switch(true){
      case (hour >= 0 && hour <= 9):
        ans_hour = `0${hour}`;
        break;
      
      default:
        ans_hour = hour%24;
        if(ans_hour == 0){
          ans_hour = '00';
        }else if(ans_hour >= 0 && ans_hour <= 9){
          ans_hour = `0${ans_hour}`;
        }else{
          ans_hour = `${ans_hour}`;
        } 
    }

    return ans_hour;
  }

  toString() {
    return `${this.ans_hour}:${this.ans_minutes}`;
  }

  plus(minutes) {
    this.ans_minutes = Number(this.ans_minutes) + minutes;
    return new Clock(Number(this.ans_hour), this.ans_minutes).toString();
  }

  minus(minutes) {
    this.ans_minutes = Number(this.ans_minutes) - minutes;
    return new Clock(Number(this.ans_hour), this.ans_minutes).toString();
  }

  equals(clock) {
    return ( clock.toString() == this.toString() )
  }
}