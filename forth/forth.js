export class Forth{
    constructor(){
        this.stack = [];
        this.userDefinedWords = {}
    }
}

Forth.prototype.stack = function(){
    return this.stack;
}

Forth.prototype.evaluate = function(string){

    let input = string.trim().split(' ');

    // Replace user defined words with their definitions if the input is not a word definition.
    if(input[0] != ':'){
        input.map((value) => {
            if(this.userDefinedWords[value.toLowerCase()] != undefined){
                let index  = input.indexOf(value);
                input.splice(index, 1); // Remove the Word

                for(let i = this.userDefinedWords[value.toLowerCase()].length - 1; i >= 0; i--){
                    input.splice(index, 0, this.userDefinedWords[value.toLowerCase()][i]); // Insert the definition
                }
            }
        });
    }

    while(input.length > 0){

        let element = input.shift().toLowerCase();

        // User defined words.
        if(element == ':'){
            let delimiter = input.pop(); // popping ';'
            this.word = input.shift().toLowerCase(); // WORD
            if(/-?[0-9]+/g.test(this.word)){
                throw new Error('Invalid definition'); // Can't override numbers
            }
            this.definition = input.map(value => value.toLowerCase()); // Definition
            this.userDefinedWords[this.word] = this.definition; // Save the mapping in an object
            input = []; // Truncate the ipnut array so that while loop should discontinue.
            continue;
        }

        switch(element){
            case "+":
                if(this.stack.length >= 2){
                    let a = this.stack.pop();
                    let b = this.stack.pop();
                    if(/-?[0-9]+/g.test(a) && /-?[0-9]+/g.test(b)){
                        this.stack.push(a+b);
                    }else{
                        input.push(a);
                        input.push(b);
                    }
                    break;
                } else {
                    throw new Error('Stack empty');
                }
            case "-":
                if(this.stack.length >= 2){
                    let a = this.stack.pop();
                    let b = this.stack.pop();
                    if(/-?[0-9]+/g.test(a) && /-?[0-9]+/g.test(b)){
                        this.stack.push(b-a);
                    }else{
                        input.push(a);
                        input.push(b);
                    }
                    break;
                } else {
                    throw new Error('Stack empty');
                }
            case "*":
                if(this.stack.length >= 2){
                    let a = this.stack.pop();
                    let b = this.stack.pop();
                    if(/-?[0-9]+/g.test(a) && /-?[0-9]+/g.test(b)){
                        this.stack.push(b*a);
                    }else{
                        input.push(a);
                        input.push(b);
                    }
                    break;
                } else {
                    throw new Error('Stack empty');
                }
            case "/":
                if(this.stack.length >= 2){
                    let a =this.stack.pop();
                    let b = this.stack.pop();
                    if(a == 0){
                        throw new Error('Division by zero');
                    }
                    if(/-?[0-9]+/g.test(a) && /-?[0-9]+/g.test(b)){
                        this.stack.push(Math.floor(b/a));
                    }else{
                        input.push(a);
                        input.push(b);
                    }
                    break;
                }else{
                    throw new Error('Stack empty');
                }
            case 'dup':
                if (this.stack.length >= 1) {
                    let a = this.stack.pop();
                    if(/-?[0-9]+/g.test(a)){
                        this.stack.push(a);
                        this.stack.push(a); 
                    }else{
                        input.push(a);
                    }
                }else{
                    throw new Error('Stack empty');
                }
                break;
            case 'drop':
                    if(this.stack.length >= 1){
                        this.stack.pop();
                    }else{
                        throw new Error('Stack empty');
                    }
                    break;
            case 'swap':
                    if(this.stack.length >= 2){
                        let a = this.stack.pop();
                        let b = this.stack.pop();
                        this.stack.push(a);
                        this.stack.push(b);
                    }else{
                        throw new Error('Stack empty');
                    }
                    break;
            case 'over':
                    if(this.stack.length >= 2){
                        let a = this.stack.pop();
                        let b = this.stack.pop();
                        this.stack.push(b);
                        this.stack.push(a);
                        this.stack.push(b);
                    }else{
                        throw new Error('Stack empty');
                    }
                    break;
            case (/-?[0-9]+/g.test(element) ? element.match(/-?[0-9]+/g)[0] : '0'): // Match a number and return it. If the number is not matched, the pattern returns null and the case fails. Thus return '0' to avoid null return.
                this.stack.push(Number(element));
                break;
            default:
                console.log(`Default Case`);
                throw new Error('Unknown command');
        }
    }
}