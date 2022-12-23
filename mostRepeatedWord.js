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
export function getMostRepeatedWord_forOf_forIn(listOfWords) {

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
export function getRepeatedWordsCounter(listOfWords) {

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