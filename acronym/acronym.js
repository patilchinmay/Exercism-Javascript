export const parse = (phrase) => {
  phrase = phrase.split(/\s|-/g);

  return phrase.reduce((acronym, currentWord)=>{
    // Find the first occurrence (i in regex signifies first occurence) of alphabet in the given word
    if(currentWord.match(/[a-zA-Z]/i) != null){
      acronym +=  currentWord.match(/[a-zA-Z]/i)[0];
    }
    return acronym;
  }, '').toUpperCase();
};
