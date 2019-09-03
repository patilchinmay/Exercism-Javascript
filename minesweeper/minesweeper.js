export const annotate = (mine) => {
    if(mine.length == 0) return mine;

    if(mine.length == 1 && mine[0] == '') return mine;

    let length = mine.length;

    // Converting array of string in array of arrays for easier manipulation
    mine.forEach((element, index) => {
        mine[index] = element.split('');
    });

    for(let i = 0; i < length; i++){        
        for(let j = 0; j < mine[i].length; j++){

            if(mine[i][j] == '*') continue;

            let mineCount = 0;

            // Checking same row
            if(mine[i][j+1] === '*') mineCount++;
            if(mine[i][j-1] === '*') mineCount++;

            if(i != 0){
                // Checking previous row
                if(mine[i-1][j] === '*') mineCount++;
                if(mine[i-1][j+1] === '*') mineCount++;
                if(mine[i-1][j-1] === '*') mineCount++;
            }
            
            if(i != length-1){
                // Checking next row
                if(mine[i+1][j] === '*') mineCount++;
                if(mine[i+1][j+1] === '*') mineCount++;
                if(mine[i+1][j-1] === '*') mineCount++;
            }

            if(mineCount == 0){
                mine[i][j] = ' ';
            }else{
                mine[i][j] = mineCount;
            }
        }
    }

    // Converting array of arrays back to  array of strings
    mine.forEach((element, index) => {
        mine[index] = element.join('');
    });

    return mine;
}