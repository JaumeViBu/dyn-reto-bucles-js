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
export function getProductsPriceOverX_forOf(listOfProducts, priceFloor = 10) {
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
export function getProductsPriceOverX_filter(listOfProducts, priceFloor = 10) {

  return listOfProducts.filter(product => product.price > priceFloor);
}

