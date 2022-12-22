import * as highestNumber from './highestNumber.js';
import * as onlyStringArray from './onlyStringArray.js';


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
console.log(...onlyStringArray.toOnlyStringArray_forOf(mixedList));
console.log(...onlyStringArray.toOnlyStringArray_filter(mixedList));
console.log('End of Only string array tests\n\n\n');




//-------------------------------------------------------------------------------------------
//Given a string array, log an array with the strings that start with 'a'.

//-------------------------------------------------------------------------------------------
// Using foreach

/**
 * Returns an array with all the strings that start with a given filter string in a given array of strings 
 *
 * @param {*} stringList
 * @param {string} [filterStr='a']
 * @returns [string]
 */
function getStringsStartingWith_forEach(stringList, filterStr = 'a') {

  const result = [];

  stringList.forEach(string => {
    if (string.startsWith(filterStr))
      result.push(string);
  });

  return result;
}

//-------------------------------------------------------------------------------------------
// Using filter

/**
 * Returns an array with all the strings that start with a given filter string in a given array of strings 
 *
 * @param {*} stringList
 * @param {string} [filterStr='a']
 * @returns [string]
 */
function getStringsStartingWith_filter(stringList, filterStr = 'a') {

  return stringList.filter(str => str[0] === filterStr);
}

console.log(...getStringsStartingWith_forEach(randomStringsList, 'r'));
console.log(...getStringsStartingWith_filter(randomStringsList, 'r'));



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
// Given an array of numbers log into console the sum of all the even numbers.
//-------------------------------------------------------------------------------------------
//using for of

/**
 * Given an array of numberes, returns the sum of all the even numbers contained within
 *
 * @param {[number]} listOfNumbers
 * @returns Number - A sum of all the even numbers contained in the given array
 */
function getSumOfEvens_forOf(listOfNumbers) {

  let evenSum = 0; for (const number of listOfNumbers) {

    evenSum += number % 2 == 0 ? number : 0;
  }

  return evenSum;
}

//-------------------------------------------------------------------------------------------
// using for


/**
 * Given an array of numberes, returns the sum of all the even numbers contained within
 *
 * @param {[number]} listOfNumbers
 * @returns Number - A sum of all the even numbers contained in the given array
 */
function getSumOfEvens_for(listOfNumbers) {

  let evenSum = 0;
  for (let i = 0; i < listOfNumbers.length; i++) {
    if (listOfNumbers[i] % 2 == 0)
      evenSum += listOfNumbers[i];
  }

  return evenSum;
}

//-------------------------------------------------------------------------------------------
// using filter and reduce

/**
 * Given an array of numberes, returns the sum of all the even numbers contained within
 *
 * @param {[number]} listOfNumbers
 * @returns Number - A sum of all the even numbers contained in the given array
 */
function getSumOfEvens_reduce(listOfNumbers) {

  return listOfNumbers.filter(number => number % 2 == 0).reduce((acc, number) => acc + number);
}

console.log(getSumOfEvens_forOf(numberList));
console.log(getSumOfEvens_for(numberList));
console.log(getSumOfEvens_reduce(numberList));

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