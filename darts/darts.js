export const solve = (x,y) => {
  let z = Math.sqrt(x*x + y*y);

  switch(true){
    case (z>=0 && z<=1):
      return 10;
      break;

    case (z>1 && z<=5):
      return 5;
      break;

    case (z>5 && z<=10):
      return 1;
      break;

    default:
      return 0;
  }
};
