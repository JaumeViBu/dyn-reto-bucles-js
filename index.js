import * as highestNumber from './highestNumber.js';
import * as onlyStringArray from './onlyStringArray.js';
import * as sumOfEvens from './sumOfEvens.js';
import * as startsWithX from './startsWithX.js';
import * as productsOverXPrice from './productsOverXPrice.js';
import * as mostRepeatedWord from './mostRepeatedWord.js';


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

//productsOverXPrice
console.log('Products over X price tests:');
console.log(productsOverXPrice.getProductsPriceOverX_forOf(productsList));
console.log(productsOverXPrice.getProductsPriceOverX_filter(productsList));
console.log('End of Products over X price tests\n\n\n');

//mostRepeatedWord
console.log('Most repeated word tests:');
console.log(`Most repeated word: ${mostRepeatedWord.getMostRepeatedWord_forOf_forIn(repeatedWordsList)}`);
console.log(`Number of repeats: ${mostRepeatedWord.getRepeatedWordsCounter(repeatedWordsList)[mostRepeatedWord.getMostRepeatedWord_forOf_forIn(repeatedWordsList)]}`);
console.log('End of Most repeated word tests\n\n\n');