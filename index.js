import * as highestNumber from './highestNumber.js';
import * as onlyStringArray from './onlyStringArray.js';
import * as sumOfEvens from './sumOfEvens.js';
import * as startsWithX from './startsWithX.js';


const numberList = [8, 3, 6, 4, 5, 7, 1, 8, 2, 4, 9, 2, 5];
const mixedList = [1, 7, 'a', 3, 5, 9, 'b', 7, 3, 5, 'c', 4, 6, 5, 2, 8, 9];
const stringList = [
  'palabras',
  'raras',
  'aleatorias',
  'sacadas',
  'chistera',
  'apresuradamente',
  'produciendo',
  'caos',
  'alarma',
];
const repeatedWordsList = [
  'Botella',
  'Vivo',
  'Amplio',
  'Graznido',
  'Robot',
  'Amplio',
  'Pagar',
  'Bengala',
  'Vivo',
  'Robot',
  'Secretaria',
  'Amontonar',
  'Herido',
  'Robot',
];
const productsList = [
  {
    name: 'Product X',
    price: 10,
  },
  {
    name: 'Product Y',
    price: 7,
  },
  {
    name: 'Product Z',
    price: 3,
  },
  {
    name: 'Product S',
    price: 5,
  },
  {
    name: 'Product SS',
    price: 15,
  },
  {
    name: 'Product SSS',
    price: 13,
  },
  {
    name: 'Product 7',
    price: 7,
  },
  {
    name: 'Product 13',
    price: 4,
  },
];
const randomStringsList = [
  'palabras',
  'raras',
  'aleatorias',
  'sacadas',
  'chistera',
  'apresuradamente',
  'produciendo',
  'caos',
  'alarma',
];

/* Third iteration - refactor organize the functions into modules and import them */

// highestNumber
console.log('Highest number module tests:');
console.log(`numberList: ${numberList}`);
console.log(highestNumber.getHighestNumber_maxSpread(numberList));
console.log(highestNumber.getHighestNumber_forEach(numberList));
console.log(highestNumber.getHighestNumber_forOf(numberList));
console.log(highestNumber.getHighestNumber_while(numberList));
console.log(highestNumber.getHighestNumber_doWhile(numberList));
console.log(highestNumber.getHighestNumber_for(numberList));
console.log(highestNumber.getHighestNumber_map(numberList));
console.log(highestNumber.getHighestNumber_reduce(numberList));
console.log('End of Highest number module tests\n\n\n');

//onlyStringArray
console.log('Only string array tests:');
console.log(`mixedList: ${mixedList}`);
console.log(onlyStringArray.toOnlyStringArray_forOf(mixedList));
console.log(onlyStringArray.toOnlyStringArray_filter(mixedList));
console.log('End of Only string array tests\n\n\n');

//sumOfEvens
console.log('Sum of evens tests:');
console.log(sumOfEvens.getSumOfEvens_forOf(numberList));
console.log(sumOfEvens.getSumOfEvens_for(numberList));
console.log(sumOfEvens.getSumOfEvens_reduce(numberList));
console.log('End of Sum of evens tests\n\n\n');

//startsWithX
console.log('Starts with X tests:');
console.log(startsWithX.getStringsStartingWith_forEach(randomStringsList, 'a'));
console.log(startsWithX.getStringsStartingWith_filter(randomStringsList, 'a'));
console.log('End of Starts with X tests\n\n\n');



//-------------------------------------------------------------------------------------------
//Given an array of product objects (with name and price), log an array with the products that cost more than 10.
//-------------------------------------------------------------------------------------------
// Using for of

/**
 * Given a list of product objects, each with name and price, returns an array with the prodcts with a price higher that the given price floor
 *
 * @param {[product]} listOfProducts
 * @param {number} [priceFloor=10]
 * @returns Array of products that cost more than the given price floor
 */
function getProductsPriceOverX_forOf(listOfProducts, priceFloor = 10) {
  const priceMoreThanX = [];
  for (const product of listOfProducts) {
    if (product.price > priceFloor)
      priceMoreThanX.push(product);
  }
  return priceMoreThanX;
}



//-------------------------------------------------------------------------------------------
// Using filter

/**
 * Given a list of product objects, each with name and price, returns an array with the prodcts with a price higher that the given price floor
 *
 * @param {[product]} listOfProducts
 * @param {number} [priceFloor=10]
 * @returns Array of products that cost more than the given price floor
 */
function getProductsPriceOverX_filter(listOfProducts, priceFloor = 10) {

  return listOfProducts.filter(product => product.price > priceFloor);
}

console.log(getProductsPriceOverX_forOf(productsList));
console.log(getProductsPriceOverX_filter(productsList));





//-------------------------------------------------------------------------------------------
// Given a string array, with repeated words, log the number of times the most repeated word is repeated.
//-------------------------------------------------------------------------------------------
// Using for of + array results + for in

/**
 * Given an array with repeated words, returns the most repeated one
 *
 * @param {[syting]} listOfWords
 * @returns string
 */
function getMostRepeatedWord_forOf_forIn(listOfWords) {

  let mostRepeated;
  const results = getRepeatedWordsCounter(listOfWords);

  for (const key in results) {
    //if not initialized, add the first key
    if (!mostRepeated)
      mostRepeated = key;

    if (results[key] > results[mostRepeated])
      mostRepeated = key
  }
  return mostRepeated;
}

/**
 * Given an array with reapeated words, returns and array with the keys equal to each different 
 * word and the value equal to the number of times it's been repeated
 *
 * @param {[string]} listOfWords
 * @returns [string]
 */
function getRepeatedWordsCounter(listOfWords) {

  const results = [];
  for (const word of listOfWords) {
    if (typeof results[word] === 'number') {
      results[word]++;
    } else {
      results[word] = 1;
    }
  }
  return results;
}



console.log(`Most repeated word: ${getMostRepeatedWord_forOf_forIn(repeatedWordsList)}`);
console.log(`Number of repeats: ${getRepeatedWordsCounter(repeatedWordsList)[getMostRepeatedWord_forOf_forIn(repeatedWordsList)]}`);