//-------------------------------------------------------------------------------------------
// Given a list of user objects(each with name <string> and role<string>), returns another list containing only the admin users, alphabetically sorted by name
//-------------------------------------------------------------------------------------------
// Using helper func with filter and helper function with sort

/**
 * Given a list of user objects(each with name <string> and role<string>), 
 * returns another list containing only the admin users, alphabetically sorted by name
 *
 * @export
 * @param {*} listOfUsers
 * @returns
 */
export function sortAdmins(listOfUsers) {

  let res = filterUsersByRole(listOfUsers, 'admin');
  res = sortUsersByName(res)

  return res;
}

/**
 * Given a list of user objects, return another list with only the users of the given role, 'user' by default.
 *
 * @param {[user]} listOfUsers
 * @param {string} [role='user']
 * @returns
 */
function filterUsersByRole(listOfUsers, role = 'user') {

  return listOfUsers.filter(user => user.role == role);
}

/**
 * Given a list of user objects, return another list with only the users of the given role, 'user' by default.
 *
 * @param {[user]} listOfUsers
 * @param {string} [role='user']
 * @returns
 */
function sortUsersByName(listOfUsers) {
  const res = [];
  for (const user of listOfUsers) {
    res.push({ ...user });
  }

  res.sort((userA, userB) => userA.name > userB.name);
  return res;
}