function isLeapYear(year){
    // If it is not leap year, the date will be generated as March 1. Thus Month will be 2 (march). February is 1.
    if(new Date(year, 1, 29).getMonth() == 1){
        return [31,29,31,30,31,30,31,31,30,31,30,31]; 
    }else {
        return [31,28,31,30,31,30,31,31,30,31,30,31];
    }
}

export const meetupDay = (year, month, day, ordinal) => {
    let calendar = [];
    // Get day on first of month. It is used to build calendar matrix for the month further down in code.
    let firstDay = new Date(year, month).getDay();
    // Decide the day in Number of the day from input.
    let dayNumber = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'].indexOf(day);
    // Change February days depending on the leap year and the number of days in the concerned month
    let daysInMonth = isLeapYear(year)[month];

    // Creating the calendar matrix
    let dayCount=0;
    // Rows are weeks. 5 in a month at max.
    for(let i = 0; i <= 4; i++){
        // Declaring each item of calendar array to be an array of 7 elements.
        calendar[i] = [7];
        // Columns are days in week. 7 in a week at max.
        for(let j = 0; j <= 6; j++){

            // Before the month begins.
            if(i == 0 && j < firstDay) {
                calendar[i][j] = null;
                continue;
            }

            dayCount++;

            // After the month is over
            if(dayCount > daysInMonth) {
                calendar[i][j] = null;
                continue;
            }

            calendar[i][j] = dayCount;

        }
    }

    // Print the calendar matrix
    // for(let i = 0; i <= 4; i++){
    //     console.log(calendar[i]);
    // }

    // Solution step
    switch(ordinal){
        case "1st": {
            return calendar[0][dayNumber] == null ? new Date(year, month, calendar[1][dayNumber]) : new Date(year, month, calendar[0][dayNumber]) ;
        }
        case "2nd": {
            return calendar[0][dayNumber] == null ? new Date(year, month, calendar[2][dayNumber]) : new Date(year, month, calendar[1][dayNumber]) ;
        }
        case "3rd": {
            return calendar[0][dayNumber] == null ? new Date(year, month, calendar[3][dayNumber]) : new Date(year, month, calendar[2][dayNumber]) ;
        }
        case "4th" : {
            return calendar[0][dayNumber] == null ? new Date(year, month, calendar[4][dayNumber]) : new Date(year, month, calendar[3][dayNumber]) ;
        }
        case "5th": {
            if(calendar[4][dayNumber] == null){
                throw new Error();
            }else{
                return new Date(year, month, calendar[4][dayNumber]);
            }
        }
        case "last": {
            return calendar[4][dayNumber] == null ? new Date(year, month, calendar[3][dayNumber]) : new Date(year, month, calendar[4][dayNumber]) ;
        }
        case "teenth": {
            for(let k = 0; k<=4; k++){
                if(calendar[k][dayNumber] >= 13 || calendar[k][dayNumber] >= 19){
                    return new Date(year, month, calendar[k][dayNumber])
                }
            }
        }
    }
}