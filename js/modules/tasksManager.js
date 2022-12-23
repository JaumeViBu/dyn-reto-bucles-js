
//-------------------------------------------------------------------------------------------
// Given an array of 'task' objects (with attributes: title <string> / isDone <bool>),
// returns another list only with the tasks already done

//-------------------------------------------------------------------------------------------
// using filter

/**
 * Given an array of 'task' objects (with attributes: title <string> / isDone <bool>),
 * returns another list only with the tasks already done
 *
 * @export
 * @param {[task]} listOfTasks
 * @returns Array with the tasks already done in the given list
 */
export function getDoneTasks_filter(listOfTasks) {

  return listOfTasks.filter(task => task.isDone);
}

//-------------------------------------------------------------------------------------------
// using for of

/**
 * Given an array of 'task' objects (with attributes: title <string> / isDone <bool>),
 * returns another list only with the tasks already done
 *
 * @export
 * @param {[task]} listOfTasks
 * @returns Array with the tasks already done in the given list
 */
export function getDoneTasks_forOf(listOfTasks) {
  const res = [];
  for (const task of listOfTasks) {
    if (task.isDone) res.push(task);
  }
  return res;
}