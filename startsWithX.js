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
export function getStringsStartingWith_forEach(stringList, filterStr = 'a') {

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
export function getStringsStartingWith_filter(stringList, filterStr = 'a') {

  return stringList.filter(str => str[0] === filterStr);
}