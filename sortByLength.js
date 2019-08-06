/*
Given an array of strings, sort them in the order of increasing lengths. 
If two strings have the same length, their relative order must be the same as in the initial array.

Example
inputArray = ["abc", "", "aaa", "a", "zz"]
the output should be
sortByLength(inputArray) = ["", "a", "zz", "abc", "aaa"]

Hints
sort()
*/

const sortByLength = (array) => {

    return array.sort((str1, str2) => str1.length - str2.length);
  
}

console.log(sortByLength( ["abc", "", "aaa", "a", "zz"]));