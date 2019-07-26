// var stepCount = 0;

export const steps = (num, stepCount=0) => {

  if(num == undefined || num == 0 || num < 0){
    throw new Error('Only positive numbers are allowed');
  }

  if (num == 1) {
    // console.log(`stepCount: ${stepCount} : ${num}`);
    return stepCount;
  }

  if(num % 2 == 0){
    stepCount+=1;
    // console.log(`stepCount: ${stepCount} : ${num}`);
    return steps(num/2, stepCount);
  }

  if(num % 2 == 1){
    stepCount+=1;
    // console.log(`stepCount: ${stepCount} : ${num}`);
    return steps((3*num)+1, stepCount);
  }
};

// console.log(`Steps for 1 : ${steps(1)}`);
// console.log(`Steps for 16 : ${steps(16)}`);
// console.log(`Steps for 12 : ${steps(12)}`);
// console.log(`Steps for 1000000 : ${steps(1000000)}`);
// console.log(`Steps for 0 : ${steps(0)}`);
// console.log(`Steps for -15 : ${steps(-15)}`);