
type formattedDataProps = {
  name: string;
  instructions: string;
  ingredients: string[],
  colors: string[],
  measurementValues: number[],
  chartColors: string[],
};

// conversion from other units to tsp
const drinkUnits = {
  cl: 2,
  dash: 0.5,
  dashes: 0.125,
  juice: 9,
  oz: 6,
  part: 9,
  parts: 9,
  shot: 9,
  shots: 9,
  tblsp: 3,
  tsp: 1,
}

// random color picker function that keeps track of already chosen colors
function randomColorPicker() {

  const pastelColorsAlt = ['rgba(255, 152, 153, 1)', 'rgba(202, 155, 247, 1)', 'rgba(255, 183, 206, 1)',
  'rgba(193, 198, 252, 1)', 'rgba(190, 253, 115, 1)', 'rgba(190, 231, 165, 1)', 
  'rgba(137, 207, 240, 1)', 'rgba(198, 164, 164, 1)', 'rgba(154, 222, 219, 1)', 
  'rgba(131, 105, 83, 1)'];
  
  return () => {
    // choose random number between 0 and 9 inclusive, matching elements from color array
    const randomNum = Math.floor(Math.random() * pastelColorsAlt.length);
    let randomColor = pastelColorsAlt[randomNum];
    pastelColorsAlt.splice(randomNum, 1);

    return randomColor;
  }
}

function isNumber(str: string) {
  const convertedNum = Number(str);
  return !Number.isNaN(convertedNum);
}

function checkIfValidMeasurement(str: string, drinkUnits: Record<string, unknown>) {
  
  // check is substring exists in drinkUnits
  return drinkUnits[str] ? { valid: true, multiplier: drinkUnits[str]} : { valid: false };
}

function convertMeasurementUnits(measurement: string | null) {

  if(measurement === null) {
    return {
      valid: false,
      value: 0,
    }
  }

  let tspValue = 0;
  let measurementResult = {
    valid: false,
    multiplier: 0,
    unitName: '',
  }
  // split measurement string into array
  const parsedStringArray = measurement.split(' ');
  // iterate through array
  // if a unit is a number, add to tspValue
  for(const substring of parsedStringArray) {
    const regexSlash = /[/]/g;
    const foundFraction = substring.match(regexSlash);

    const regexDash = /[-]/g;
    const foundVolumeRange = substring.match(regexDash);

    if(isNumber(substring)) {
      tspValue += Number(substring);
    }
    // write code to check if the string contains a '/' to indicate fraction value
    // if yes, convert to number and add to tspValue
    // use regex
    else if(foundFraction !== null && foundFraction.length == 1) {
      const upper = Number(substring[0]);
      const lower = Number(substring[2]);
      tspValue += upper / lower;
    } else if(foundVolumeRange !== null && foundVolumeRange.length == 1) {
      const upper = Number(substring[0]);
      const lower = Number(substring[2]);
      tspValue += (upper + lower) / lower;
    }

    else {
      const result = checkIfValidMeasurement(substring.toLowerCase(), drinkUnits);
      if(result.valid) {
        measurementResult = {
          valid: true,
          multiplier: result.multiplier as number,
          unitName: substring,
        } 
      } 
    }
  }

  const { valid, multiplier, unitName } = measurementResult;

  if(tspValue > 0 && valid == true) {
    return {
      valid: true,
      value: tspValue * multiplier,
    }
  }
  // edge case, if unit is 'part' or 'dash' or 'shot', only return the multiplier value
  else if(unitName == 'shot' || unitName == 'dash' || unitName == 'part') {
    return {
      valid: true,
      value: drinkUnits[unitName],
    }
  } else {
    return {
      valid: false,
      value: 0,
    }
  }


}
function ingredientParser(rawDrinkData: Record<string, string | null>, formattedData: formattedDataProps) {

  // iterate while valid ingredients still exist
  // strIngredient1 -> strIngredient15
  // strMeasure1 -> strMeasure15
  const INGREDIENT_RANGE = 15;

  let num = 1;
  let ingredientKey = `strIngredient${num}`;
  let currentIngredient = rawDrinkData[ingredientKey];
  let measurementKey = `strMeasure${num}`;
  let currentMeasurement = rawDrinkData[measurementKey];

  const pickRandomColor = randomColorPicker();

  while(currentIngredient) {
    const measurement = rawDrinkData[`strMeasure${num}`];
    const formattedName = currentIngredient + ' (' + measurement?.trim().toLowerCase() + ')';

    // push to ingredient aray
    formattedData.ingredients.push(formattedName);
    // assign random color
    const randomColor = pickRandomColor();
    formattedData.colors.push(randomColor);
    // check if ingredient has valid measurement
    const result = convertMeasurementUnits(currentMeasurement);
    // if yes, convert to tsp units and add its color to chartColors
    if(result.valid) {
      formattedData.measurementValues.push(result.value);
      formattedData.chartColors.push(randomColor);
    }
    // update ingredient
    num += 1;
    ingredientKey = `strIngredient${num}`;
    currentIngredient = rawDrinkData[ingredientKey];
    measurementKey = `strMeasure${num}`;
    currentMeasurement = rawDrinkData[measurementKey];
  }
  return;
}

// function takes in raw data for one drink

// it will return a new object that contains the name with measurements, ingredients, random 
// colors, drink measurement values using standard unit, pie chart colors for ingredients
// with valid measurements

// function to parse valid measurements and convert to tsp units


export default function rawDrinkDataParser(rawDrinkData: Record<string, string | null>) {

  const formattedData = {
    name: rawDrinkData.strDrink as string,
    instructions: rawDrinkData.strInstructions as string,
    ingredients: [],
    colors: [],
    measurementValues: [],
    chartColors: [],
  };
  // parse data to fill out all data arrays
  ingredientParser(rawDrinkData, formattedData);

  return formattedData;
}

