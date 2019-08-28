const oneEarthYearOn = {
  'earth': 1,
  'mercury': 0.2408467,
  'venus':0.61519726,
  'mars': 1.8808158,
  'jupiter': 11.862615,
  'saturn': 29.447498,
  'uranus':84.016846,
  'neptune': 164.79132
}

const earthYearInSeconds = 31557600;

export const age = (planet , ageInSeconds) => Number(((ageInSeconds/earthYearInSeconds)/oneEarthYearOn[planet]).toFixed(2));
