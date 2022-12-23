
//-------------------------------------------------------------------------------------------
// Given a list of products objects(each with name <string> and price <number>), returns another list with the products sorted from less to most price

//-------------------------------------------------------------------------------------------
// using sort

/**
 * Given a list of products objects(each with name <string> and price <number>), 
 * returns another list with the products sorted from less to most price
 *
 * @export
 * @param {[products]} listOfProducts
 * @returns
 */
export function sortByPriceAsc_sort(listOfProducts) {

  return listOfProducts.sort((productA, productB) => productA.price - productB.price);
}

/**
 * Given a list of products objects(each with name <string> and price <number>), 
 * returns another list with the products sorted from less to most price
 *
 * @export
 * @param {[products]} listOfProducts
 * @returns
 */
export function sortByPriceAsc_forBubleSort(listOfProducts) {

  const res = deepCopyProductList(listOfProducts);

  for (let i = 0; i < res.length - 1; i++) {

    for (let j = 0; j < res.length - i - 1; j++) {

      if (listOfProducts[j] > listOfProducts[j + 1]) {

        swap(listOfProducts, j, j + 1);
      }
    }
  }

  return res;
}

function deepCopyProductList(listOfProducts) {
  const res = [];

  for (const product of listOfProducts) {
    res.push({ ...product });
  }

  return res;
}

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
