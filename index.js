
/*
- Dado un array de números imprimir por consola el número mayor.
- Dado un array de números imprime por consola la suma de todos los que sean pares.
- Dado un array de números y strings imprime un array de solamente los strings.
- Dado un array de strings imprime un array de solamente los strings que empiezan por ‘a’.
- Dado un array de strings (con palabras repetidas) imprime el numero de repeticiones de la palabra que más veces aparezca.
- Dado un array de objetos producto (con nombre y precio) imprime un array de los objetos que sean más caros de 10.
*/


const numberList = [8, 3, 6, 4, 5, 7, 1, 8, 2, 4, 9, 2, 5];

// //Dado un array de números imprimir por consola el número mayor.

// let highestNumber = -Infinity;

// //-------------------------------------------------------------------------------------------
// //using math.max with spread
// highestNumber = Math.max(...numberList);

// //-------------------------------------------------------------------------------------------
// //using for of
// for (const number of numberList) {
//   highestNumber = number > highestNumber ? number : highestNumber;
// }

// //-------------------------------------------------------------------------------------------
// //using for each
// numberList.forEach(number => {
//   highestNumber = number > highestNumber ? number : highestNumber;
// });

// //-------------------------------------------------------------------------------------------
// // using while
// let i = 0;
// while (i < numberList.length) {

//   const number = numberList[i];

//   highestNumber = number > highestNumber ? number : highestNumber;

//   i++;
// }

// //-------------------------------------------------------------------------------------------
// // using do while
// let i = 0;
// do {

//   const number = numberList[i];

//   highestNumber = number > highestNumber ? number : highestNumber;

//   i++;
// } while (i < numberList.length);

// //-------------------------------------------------------------------------------------------
// // using for
// for (let i = 0; i < numberList.length; i++) {

//   const number = numberList[i];
//   highestNumber = number > highestNumber ? number : highestNumber;
// }

// //-------------------------------------------------------------------------------------------
// // using map
// numberList.map(number=>highestNumber = number > highestNumber ? number : highestNumber);

// //-------------------------------------------------------------------------------------------
// // using reduce
// highestNumber = numberList.reduce((prevNumber, number) => number > prevNumber ? number : prevNumber, numberList[0]);

// console.log(`Highest number: ${highestNumber}`);

// //Dado un array de números imprime por consola la suma de todos los que sean pares.

// //-------------------------------------------------------------------------------------------
// //using for of
// let evenSum = 0;
// for (const number of numberList) {
//   if (number % 2 == 0)
//     evenSum += number;
// }
// console.log(evenSum);

// //-------------------------------------------------------------------------------------------
// // using for
// let evenSum = 0;
// for (let i = 0; i < numberList.length; i++) {
//   if (numberList[i] % 2 == 0)
//     evenSum += numberList[i];
// }
// console.log(evenSum);

// //-------------------------------------------------------------------------------------------
// // using filter and reduce
// const evenList = numberList.filter(number => number % 2 == 0);
// console.log(evenList.reduce((acc, number) => acc + number));



// // Dado un array de números y strings imprime un array de solamente los strings.

const mixedList = [1, 7, 'a', 3, 5, 9, 'b', 7, 3, 5, 'c', 4, 6, 5, 2, 8, 9];

// //-------------------------------------------------------------------------------------------
// //using filter
// const filteredStrings = mixedList.filter(element => typeof element === 'string');
// console.log(...filteredStrings);

// //-------------------------------------------------------------------------------------------
// // using for of
// const stringArray = [];
// for (const element of mixedList) {
//   if (typeof element === 'string')
//     stringArray.push(element);
// }
// console.log(...stringArray);

// //-------------------------------------------------------------------------------------------
// //using for
// for (let i = 0; i < mixedList.length; i++) {

//   if (typeof mixedList[i] === 'string')
//     console.log(mixedList[i]);
// }


// // Dado un array de strings imprime un array de solamente los strings que empiezan por ‘a’.


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

// //-------------------------------------------------------------------------------------------
// //using filter
// console.log(...stringList.filter(str => str[0] === 'a'));

// //-------------------------------------------------------------------------------------------
// // Using for
// for (let i = 0; i < stringList.length; i++) {
//   const element = stringList[i];
//   if (element[0] === 'a')
//     console.log(element);
// }

// //-------------------------------------------------------------------------------------------
// // Using for of and string.startsWith()
// for (const str of stringList) {

//   if (str.startsWith('a'))
//     console.log(str);
// }

// //-------------------------------------------------------------------------------------------


// // Dado un array de strings (con palabras repetidas) imprime el numero de repeticiones de la palabra que más veces aparezca.

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

// //-------------------------------------------------------------------------------------------
// // Using for of + array results + for in
// const results = [];
// for (const word of repeatedWordsList) {
//   if (typeof results[word] === 'number') {
//     results[word]++;
//   } else {
//     results[word] = 1;
//   }
// }

// // let mostRepeated = null;
// for (const key in results) {
//   //if not initialized, add the first key
//   if (!mostRepeated)
//     mostRepeated = key;

//   if (results[key] > results[mostRepeated])
//     mostRepeated = key
// }

// console.log(`Most repeated word: ${mostRepeated}`);
// console.log(`Number of repeats: ${results[mostRepeated]}`);

// // Dado un array de objetos producto (con nombre y precio) imprime un array de los objetos que sean más caros de 10.
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

// //-------------------------------------------------------------------------------------------
// // Using for of
// const priceMoreThan10 = [];
// for (const product of productsList) {
//   if (product.price > 10)
//     priceMoreThan10.push(product);
// }
// console.log(priceMoreThan10);

// //-------------------------------------------------------------------------------------------
// // Using filter
// const priceMoreThan10 = productsList.filter(product => product.price > 10);
// console.log(priceMoreThan10);


//-------------------------------------------------------------------------------------------
// Refactor into function

//-------------------------------------------------------------------------------------------
// Dado un array de números y strings imprime un array de solamente los strings

/**
 * Return an array containing only the strings in the given parameter
 *
 * @param {[string]} array 
 * @returns [string]
 */
function toOnlyStringArray_forOf(array) {

  const onlyStrings = [];
  for (const item of array) {
    if (typeof item == 'string')
      onlyStrings.push(item);
  }

  return onlyStrings
}

/**
 * Return an array containing only the strings in the given parameter
 *
 * @param {[string]} array 
 * @returns [string]
 */
function toOnlyStringArray_filter(array) {

  return array.filter(element => typeof element == 'string');
}


console.log(...toOnlyStringArray_forOf(mixedList));
console.log(...toOnlyStringArray_filter(mixedList));

// Dado un array de strings imprime un array de solamente los strings que empiezan por ‘a’.

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
//Given an array of numbers log into console the highest number.

//-------------------------------------------------------------------------------------------
//using math.max with spread

/**
 * Given an array of numbers, returns the highest number
 *
 * @param {[number]} numbers
 * @returns The highest number in the given array
 */
function getHighestNumber_maxSpread(numbers) {

  return Math.max(...numbers);
}

//-------------------------------------------------------------------------------------------
//using for of

/**
 * Given an array of numbers, returns the highest number
 *
 * @param {[number]} numbers
 * @returns The highest number in the given array
 */
function getHighestNumber_forOf(numbers) {
  let highest = -Infinity;
  for (const number of numbers) {
    highest = number > highest ? number : highest;
  }
  return highest;
}


//-------------------------------------------------------------------------------------------
//using for each

/**
 * Given an array of numbers, returns the highest number
 *
 * @param {[number]} numbers
 * @returns The highest number in the given array
 */
function getHighestNumber_forEach(numbers) {
  let highest = -Infinity;
  numbers.forEach(number => {
    highest = number > highest ? number : highest;
  });
  return highest;
}

//-------------------------------------------------------------------------------------------
// using while


/**
 * Given an array of numbers, returns the highest number
 *
 * @param {[number]} numbers
 * @returns The highest number in the given array
 */
function getHighestNumber_while(numbers) {
  let highest = -Infinity;
  let i = 0;
  while (i < numbers.length) {

    const number = numbers[i];

    highest = number > highest ? number : highest;

    i++;
  }
  return highest;
}

//-------------------------------------------------------------------------------------------
// using do while

/**
 * Given an array of numbers, returns the highest number
 *
 * @param {[number]} numbers
 * @returns The highest number in the given array
 */
function getHighestNumber_doWhile(numbers) {
  let highest = -Infinity;
  let i = 0;
  do {

    const number = numbers[i];

    highest = number > highest ? number : highest;

    i++;
  } while (i < numbers.length);
  return highest;
}

//-------------------------------------------------------------------------------------------
// using for

/**
 * Given an array of numbers, returns the highest number
 *
 * @param {[number]} numbers
 * @returns The highest number in the given array
 */
function getHighestNumber_for(numbers) {
  let highest = -Infinity;
  for (let i = 0; i < numbers.length; i++) {

    const number = numbers[i];
    highest = number > highest ? number : highest;
  }
  return highest;
}

//-------------------------------------------------------------------------------------------
// using map

/**
 * Given an array of numbers, returns the highest number
 *
 * @param {[number]} numbers
 * @returns The highest number in the given array
 */
function getHighestNumber_map(numbers) {
  let highest = -Infinity;
  numbers.map(number => highest = number > highest ? number : highest);
  return highest;
}
//-------------------------------------------------------------------------------------------
// using reduce

/**
 * Given an array of numbers, returns the highest number
 *
 * @param {[number]} numbers
 * @returns The highest number in the given array
 */
function getHighestNumber_reduce(numbers) {

  return numbers.reduce((prevNumber, number) => number > prevNumber ? number : prevNumber, numbers[0]);;
}

console.log(getHighestNumber_maxSpread(numberList));
console.log(getHighestNumber_forEach(numberList));
console.log(getHighestNumber_forOf(numberList));
console.log(getHighestNumber_while(numberList));
console.log(getHighestNumber_doWhile(numberList));
console.log(getHighestNumber_for(numberList));
console.log(getHighestNumber_map(numberList));
console.log(getHighestNumber_reduce(numberList));

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
// const priceMoreThan10 = 
// console.log(priceMoreThan10);

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

// //-------------------------------------------------------------------------------------------
// // using filter and reduce
// const evenList = numberList.filter(number => number % 2 == 0);
// console.log(evenList.reduce((acc, number) => acc + number));

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

console.log(getSumOfEvens_forOf(numberList));
console.log(getSumOfEvens_for(numberList));
console.log(getSumOfEvens_reduce(numberList));