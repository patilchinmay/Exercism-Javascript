export const compute = (oldDNA, newDNA) => {
  if(oldDNA === '' && newDNA === ''){
    return 0;
  }

  if(oldDNA === ''){
    throw new Error('left strand must not be empty');
  }

  if(newDNA === ''){
    throw new Error('right strand must not be empty');
  }

  if(oldDNA.length != newDNA.length){
    throw new Error('left and right strands must be of equal length');
  }

  let hammingDistance = 0;

  for(let i = 0; i < oldDNA.length; i++){
    if(oldDNA.charAt(i) != newDNA.charAt(i)){
      hammingDistance++;
    }
  }

  return hammingDistance;
};