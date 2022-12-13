
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

//using for of
// for (const number of numberList) {
//   if (number % 2 == 0)
//     console.log(number);
// }

// using for
// for (let i = 0; i < numberList.length; i++) {
//   if (numberList[i] % 2 == 0)
//     console.log(numberList[i]);

// }

// using filter and spread
// const evenList = numberList.filter(number => number % 2 == 0);
// console.log(...evenList);



// Dado un array de números y strings imprime un array de solamente los strings.

const mixedList = [1, 7, 'a', 3, 5, 9, 'b', 7, 3, 5, 'c', 4, 6, 5, 2, 8, 9];

//using filter
// const filteredStrings = mixedList.filter(element => typeof element === 'string');
// console.log(...filteredStrings);

// using for of
// for (const element of mixedList) {
//   if (typeof element === 'string')
//     console.log(element);
// }

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

//using filter
// console.log(...stringList.filter(str => str[0] === 'a'));

