//-------------------------------------------------------------------------------------------
// Given an array with both numbers and strings, log an array with only the strings.
//-------------------------------------------------------------------------------------------
// Using for of

/**
 * Return an array containing only the strings in the given parameter
 *
 * @param {[string]} array 
 * @returns [string]
 */
export function toOnlyStringArray_forOf(array) {

  const onlyStrings = [];
  for (const item of array) {
    if (typeof item == 'string')
      onlyStrings.push(item);
  }

  return onlyStrings
}

//-------------------------------------------------------------------------------------------
// Using filter

/**
 * Return an array containing only the strings in the given parameter
 *
 * @param {[string]} array 
 * @returns [string]
 */
export function toOnlyStringArray_filter(array) {

  return array.filter(element => typeof element == 'string');
}