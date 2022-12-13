
/*
- Dado un array de números imprimir por consola el número mayor.
- Dado un array de números imprime por consola la suma de todos los que sean pares.
- Dado un array de números y strings imprime un array de solamente los strings.
- Dado un array de strings imprime un array de solamente los strings que empiezan por ‘a’.
- Dado un array de strings (con palabras repetidas) imprime el numero de repeticiones de la palabra que más veces aparezca.
- Dado un array de objetos producto (con nombre y precio) imprime un array de los objetos que sean más caros de 10.
*/

const numberList = [8, 3, 6, 4, 5, 7, 1, 8, 2, 4, 9, 2, 5];

//Dado un array de números imprimir por consola el número mayor.

let highestNumber = -Infinity;

//-------------------------------------------------------------------------------------------
//using math.max with spread
//highestNumber = Math.max(...numberList);

//-------------------------------------------------------------------------------------------
//using for of
// for (const number of numberList) {
//   highestNumber = number > highestNumber ? number : highestNumber;
// }

//-------------------------------------------------------------------------------------------
//using for each
// numberList.forEach(number => {
//   highestNumber = number > highestNumber ? number : highestNumber;
// });

//-------------------------------------------------------------------------------------------
// using while
// let i = 0;
// while (i < numberList.length) {

//   const number = numberList[i];

//   highestNumber = number > highestNumber ? number : highestNumber;

//   i++;
// }

//-------------------------------------------------------------------------------------------
// using do while
// let i = 0;
// do {

//   const number = numberList[i];

//   highestNumber = number > highestNumber ? number : highestNumber;

//   i++;
// } while (i < numberList.length);

//-------------------------------------------------------------------------------------------
// using for
// for (let i = 0; i < numberList.length; i++) {

//   const number = numberList[i];
//   highestNumber = number > highestNumber ? number : highestNumber;
// }

//-------------------------------------------------------------------------------------------
// using map
// numberList.map(number=>highestNumber = number > highestNumber ? number : highestNumber);

//-------------------------------------------------------------------------------------------
// using reduce
// highestNumber = numberList.reduce((prevNumber, number) => number > prevNumber ? number : prevNumber, numberList[0]);

console.log(`Highest number: ${highestNumber}`);

//Dado un array de números imprime por consola la suma de todos los que sean pares.

//-------------------------------------------------------------------------------------------
//using for of
// for (const number of numberList) {
//   if (number % 2 == 0)
//     console.log(number);
// }

//-------------------------------------------------------------------------------------------
// using for
// for (let i = 0; i < numberList.length; i++) {
//   if (numberList[i] % 2 == 0)
//     console.log(numberList[i]);

// }

//-------------------------------------------------------------------------------------------
// using filter and spread
// const evenList = numberList.filter(number => number % 2 == 0);
// console.log(...evenList);



// Dado un array de números y strings imprime un array de solamente los strings.

const mixedList = [1, 7, 'a', 3, 5, 9, 'b', 7, 3, 5, 'c', 4, 6, 5, 2, 8, 9];

//-------------------------------------------------------------------------------------------
//using filter
// const filteredStrings = mixedList.filter(element => typeof element === 'string');
// console.log(...filteredStrings);

//-------------------------------------------------------------------------------------------
// using for of
// for (const element of mixedList) {
//   if (typeof element === 'string')
//     console.log(element);
// }

//-------------------------------------------------------------------------------------------
//using for
// for (let i = 0; i < mixedList.length; i++) {

//   if (typeof mixedList[i] === 'string')
//     console.log(mixedList[i]);
// }


// Dado un array de strings imprime un array de solamente los strings que empiezan por ‘a’.

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

//-------------------------------------------------------------------------------------------
//using filter
// console.log(...stringList.filter(str => str[0] === 'a'));

//-------------------------------------------------------------------------------------------
// Using for
// for (let i = 0; i < stringList.length; i++) {
//   const element = stringList[i];
//   if (element[0] === 'a')
//     console.log(element);
// }

//-------------------------------------------------------------------------------------------
// Using for of and string.startsWith()
// for (const str of stringList) {

//   if (str.startsWith('a'))
//     console.log(str);
// }

// Dado un array de strings (con palabras repetidas) imprime el numero de repeticiones de la palabra que más veces aparezca.

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

//-------------------------------------------------------------------------------------------
// Using for of + array results
const results = [];
for (const word of repeatedWordsList) {
  if (typeof results[word] === 'number') {
    results[word]++;
  } else {
    results[word] = 1;
  }
}

let mostRepeated = null;
for (const key in results) {
  //if not initialized, add the first key
  if (!mostRepeated)
    mostRepeated = key;

  if (results[key] > results[mostRepeated])
    mostRepeated = key
}

console.log(`Most repeated word: ${mostRepeated}`);
console.log(`Number of repeats: ${results[mostRepeated]}`);

// Dado un array de objetos producto (con nombre y precio) imprime un array de los objetos que sean más caros de 10.
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

//-------------------------------------------------------------------------------------------
// Using for of
// const priceMoreThan10 = [];
// for (const product of productsList) {
//   if (product.price > 10)
//     priceMoreThan10.push(product);
// }
// console.log(priceMoreThan10);

//-------------------------------------------------------------------------------------------
// Using filter
// const priceMoreThan10 = productsList.filter(product => product.price > 10);
// console.log(priceMoreThan10);