//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const colorCode = (color) => {
  if(COLORS.indexOf(color) != -1){
    return COLORS.indexOf(color)
  }else {
    throw new Error("Invalid color input!");
  }
};

export const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];
