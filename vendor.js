// Roman Numeral	Number
// I	1
// V	5
// X	10
// L	50
// C	100
// D	500
// M	1000

// A string of letters means that their values should be added together.  for example XXX = 10 + 10 + 10 = 30
// If a smaller value is placed before a larger one, we subtract instead of adding. For instance, IV = 5 - 1 = 4.

// 1.- get a function to assingn values to each letter.
// I can start by mapping multiples of 10. then 100, then 1000 or whatever is more easy.

// romanPrimitives = {
//     I : 1,
//     V : 5,
//     X : 10,
//     L : 50,
//     C : 100,
//     D : 500,
//     M : 1000
// }

// function getKeyByValue(object, value) {
//     return Object.keys(object).find(key => object[key] === value);
//   }

// // Check if num it matches any of values of the romanPrimitives
// function isInRomanPrimitives(num){
//     console.log(`num: ${num}`)
//     for (const property in romanPrimitives) {
//         console.log(romanPrimitives[property])
//         if(romanPrimitives[property] === num){
//             return num;
//         }
//     }
//     return false;
// }

var result = '';

var numberOfMs = 0;
var numberOfCs = 0;
var numberOfXs = 0;
var numberOfIs = 0;

// findout how many M's
function getNumberofMs(num) {
  let numBetweenThousand = num / 1000;
  if (numBetweenThousand < 1) {
    return 0;
  } else {
    numberOfMs = Math.floor(numBetweenThousand);
    return num % 1000;
  }
}

let anyPrimitives = (num, primitive) => {
  return num / primitive > 1;
};

function getPrimitives(num, max) {
  let numBetweenMax = num / max;
  if (max === 1000) {
    numberOfMs = Math.floor(numBetweenMax);
  } else if (max === 100) {
    numberOfCs = Math.floor(numBetweenMax);
  } else if (max === 10) {
    numberOfXs = Math.floor(numBetweenMax);
  } else if (max === 1) {
    numberOfIs = Math.floor(numBetweenMax);
  }
  return num % max;
}

function addMs(num, romanPrimitive) {
  switch (num) {
    case 0:
      break;
    case 1:
      result += `${romanPrimitive}`;
      break;
    case 2:
      result += `${romanPrimitive}${romanPrimitive}`;
      break;
    case 3:
      result += `${romanPrimitive}${romanPrimitive}${romanPrimitive}`;
      break;
  }
}

function addCs(num) {
  switch (num) {
    case 0:
      break;
    case 1:
      result += 'C';
      break;
    case 2:
      result += 'CC';
      break;
    case 3:
      result += 'CCC';
      break;
    case 4:
      result += 'CD';
      break;
    case 5:
      result += 'D';
      break;
    case 6:
      result += 'DC';
      break;
    case 7:
      result += 'DCC';
      break;
    case 8:
      result += 'DCCC';
      break;
    case 9:
      result += 'CM';
      break;
  }
}

function addXs(num) {
  switch (num) {
    case 0:
      break;
    case 1:
      result += 'X';
      break;
    case 2:
      result += 'XX';
      break;
    case 3:
      result += 'XXX';
      break;
    case 4:
      result += 'XL';
      break;
    case 5:
      result += 'L';
      break;
    case 6:
      result += 'LX';
      break;
    case 7:
      result += 'LXX';
      break;
    case 8:
      result += 'LXXX';
      break;
    case 9:
      result += 'XC';
      break;
  }
}

function addIs(num) {
  switch (num) {
    case 0:
      break;
    case 1:
      result += 'I';
      break;
    case 2:
      result += 'II';
      break;
    case 3:
      result += 'III';
      break;
    case 4:
      result += 'IV';
      break;
    case 5:
      result += 'V';
      break;
    case 6:
      result += 'VI';
      break;
    case 7:
      result += 'VII';
      break;
    case 8:
      result += 'VIII';
      break;
    case 9:
      result += 'IX';
      break;
  }
}

// console.log(result);

// Fix the logic in the main function
// Find the rigth max value to start
// numberRemaining has to set what max use in getPrimitives
// add the correct Letter after each getPrimitive call

// console.log(`result: ${result}`);
// console.log(`numberOfMs: ${numberOfMs}`);
// let numberRemaining = getPrimitives(num, 1000);
// console.log(`numberOfMs: ${numberOfMs}`);
// console.log(`numberRemaining: ${numberRemaining}`);
// addMs(numberOfMs, 'M');
// console.log(`result: ${result}`);
// numberRemaining = getPrimitives(numberRemaining, 100);
// console.log(`numberOfCs: ${numberOfCs}`);
// console.log(`numberRemaining: ${numberRemaining}`);
// addCs(numberOfCs);
// console.log(`result: ${result}`);
// numberRemaining = getPrimitives(numberRemaining, 10);
// console.log(`numberOfXs: ${numberOfXs}`);
// console.log(`numberRemaining: ${numberRemaining}`);
// addXs(numberOfXs);
// console.log(`result: ${result}`);
// numberRemaining = getPrimitives(numberRemaining, 1);
// console.log(`numberOfIs: ${numberOfIs}`);
// console.log(`numberRemaining: ${numberRemaining}`);
// addIs(numberOfIs);
// console.log(`result: ${result}`);

function convertToRoman(num) {
  let numberRemaining;
  if (anyPrimitives(num, 1000)) {
     numberRemaining = getPrimitives(num, 1000);
     addMs(numberOfMs, 'M');
     console.log(`result: ${result}`);
  } else if(anyPrimitives(num, 100)){
    numberRemaining = getPrimitives(num, 100);
    addCs(numberOfCs);
  } else if(anyPrimitives(num, 10)){
      numberRemaining = getPrimitives(num, 10);
      addXs(numberOfXs);
      if (numberRemaining % 10 === 0){
          return result;
      } else {
        numberRemaining = getPrimitives(numberRemaining, 1);
        addIs(numberOfIs);
      }


  } else {
      numberRemaining = getPrimitives(num, 1);
      addIs(numberOfIs);
  }
  return result;
}

  



// console.log(convertToRoman(2));
// console.log(convertToRoman(3));
// console.log(convertToRoman(4));
// console.log(convertToRoman(5));
// console.log(convertToRoman(9));
// console.log(convertToRoman(12));
// console.log(convertToRoman(30));
//console.log(convertToRoman(16));
// console.log(convertToRoman(30));
// convertToRoman(44);
// convertToRoman(45);
// convertToRoman(68);
// convertToRoman(83);
console.log(convertToRoman(97));
// console.log(convertToRoman(99));
// convertToRoman(400);
// convertToRoman(500);
// convertToRoman(501);
// convertToRoman(649);
// convertToRoman(798);
// convertToRoman(891);
// convertToRoman(1000);
// console.log(convertToRoman(1004));
// convertToRoman(1006);
// convertToRoman(1023);
// convertToRoman(2014);
// convertToRoman(3999);
