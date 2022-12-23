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
export function getSumOfEvens_forOf(listOfNumbers) {

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
export function getSumOfEvens_for(listOfNumbers) {

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
export function getSumOfEvens_reduce(listOfNumbers) {

  return listOfNumbers.filter(number => number % 2 == 0).reduce((acc, number) => acc + number);
}