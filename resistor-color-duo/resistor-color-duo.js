//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];

export const value = ([color1, color2]) => {
  if(color1 && color2){
    return Number((COLORS.indexOf(color1))+String(COLORS.indexOf(color2))); // Number + String => Coercion => String
  }else{
    throw new Error("Invalid color input");
  }
};
