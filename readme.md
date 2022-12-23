- **Challenge** ⇒ Exercises **loops & conditionals in Javascript** (Use for, while, do while, for of, for in, & foreach loops)

<hr>

- 1st iteration - no functions - big mess
- [x] Given an array of numbers log into console the bigger number.
  - [x] Using Math.max and spread operator
  - [x] Using for of
  - [x] Using foreach
  - [x] Using while
  - [x] Using do while
  - [x] Using for
  - [x] Using map
  - [x] Using reduce
- [x] Given an array of numbers log into console the sum of all the even numbers.
  - [x] Using for of
  - [x] Using for
  - [x] Using filter and reduce
- [x] Given an array with both numbers and strings, log an array with only the strings.
  - [x] Using filter
  - [x] Using for of
  - [x] Using for
- [x] Given a string array log an array with the strings that start with 'a'.
  - [x] Using filter
  - [x] Using for
  - [x] Using for of and string.startsWith()
- [x] Given a string array, with repeated words, log the number of times the most repeated word is repeated. 
  - [x] Using for of + array results + for in
- [x] Given an array of product objects (with name and price), log an array with the products that cost more than 10.
  - [x] Using for of
  - [x] Using filter
<hr>

- 2nd iteration - Refactor all exercises into functions
- [x] Given an array of numbers log into console the bigger number.
  - [x] Using Math.max and spread operator - getHighestNumber_maxSpread
  - [x] Using for of - getHighestNumber_forOf
  - [x] Using foreach - getHighestNumber_forEach
  - [x] Using while - getHighestNumber_while
  - [x] Using do while - getHighestNumber_doWhile
  - [x] Using for - getHighestNumber_for
  - [x] Using map - getHighestNumber_map
  - [x] Using reduce - getHighestNumber_reduce
- [x] Given an array of numbers log into console the sum of all the even numbers.
  - [x] Using for of
  - [x] Using for
  - [x] Using filter and reduce
- [x] Given an array with both numbers and strings, log an array with only the strings.
  - [x] Using for of - toOnlyStringArray_forOf
  - [x] Using filter - toOnlyStringArray_filter
- [x] Given a string array log an array with the strings that start with 'a'.
  - [x] Using foreach - getStringsStartingWith_forEach
  - [x] Using filter - getStringsStartingWith_filter
- [x] Given a string array, with repeated words, log the number of times the most repeated word is repeated. 
  - [x] Using for of + array results + for in
- [x] Given an array of product objects (with name and price), log an array with the products that cost more than 10.
  - [x] Using for of
  - [x] Using filter
<hr>

- 3rd iteration - Refactor all functions into modules
- [x] Given an array of numbers log into console the bigger number -> highestNumber.js 
- [x] Given an array of numbers log into console the sum of all the even numbers -> sumOfEvens.js
- [x] Given an array with both numbers and strings, log an array with only the strings -> onlyStringArray.js
- [x] Given a string array log an array with the strings that start with x string passed as param
- [x] Given a string array, with repeated words, log the number of times the most repeated word is repeated 
- [x] Given an array of product objects (with name and price), log an array with the products that cost more than 10

<hr>

- 4th iteration - Sort files in folders and add following functions
- [x] Create a better folder structure and sort existing files in it.
- [x] Given an array of 'task' objects (with attributes: title <string> / isDone <bool>), returns another list only with the tasks already done -> tasksManager.js 
  - [x] Using filter
  - [x] Using for of
- [x] Given a list of products objects(each with name <string> and price <number>), returns another list with the products sorted from less to most price -> .js
  - [x] Using sort
  - [x] Using for + buble sort
- [ ] Given a list of user objects(each with name <string> and role<string>), returns another list containing only the admin users, alphabetically sorted by name -> .js