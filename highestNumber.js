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
export function getHighestNumber_maxSpread(numbers) {

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
export function getHighestNumber_forOf(numbers) {
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
export function getHighestNumber_forEach(numbers) {
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
export function getHighestNumber_while(numbers) {
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
export function getHighestNumber_doWhile(numbers) {
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
export function getHighestNumber_for(numbers) {
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
export function getHighestNumber_map(numbers) {
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
export function getHighestNumber_reduce(numbers) {

  return numbers.reduce((prevNumber, number) => number > prevNumber ? number : prevNumber, numbers[0]);;
}
