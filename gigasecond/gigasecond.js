// Learnings: Month starts at 0 in Date() format. 
// 10**9 seconds == 10**12 miliseconds. 
// We have to add miliseconds to the date.getTime() because it returns miliseconds.
// Creation of new date with just single parameter, assumes that parameter to be miliseconds.
// To print a date in GMT timezone string, use date.toUTCString()

export const gigasecond = (date) => {
  let multiplier = 10**12; // 1 Gigasecond = 10**9 seconds = 10**12 miliseconds
  let ans = new Date(date.getTime() + multiplier);
  return ans;
};
