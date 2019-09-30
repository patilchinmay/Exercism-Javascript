export const matchingBrackets = (pattern) => {
  let stack = [];

  for (let i = 0; i < pattern.length; i++) {
    stack.push(pattern.charAt(i));

    if(i>=1){
      
      let length = stack.length;
      if ( (stack[length-2] == '{' && stack[length-1] == '}') || (stack[length-2] == '[' && stack[length-1] == ']') || (stack[length-2] == '(' && stack[length-1] == ')') ){
        stack.pop();
        stack.pop();
      }
    }
  }

  return stack.length == 0 ? true : false;
};
