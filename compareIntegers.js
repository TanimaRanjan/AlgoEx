/* 
Compare two integers given as strings.
Example
    For a = "12" and b = "13", the output should be compareIntegers(a, b) = "less";
    For a = "875" and b = "799", the output should be compareIntegers(a, b) = "greater";
    For a = "1000" and b = "1000", the output should be compareIntegers(a, b) = "equal". 
*/

const compareIntegers = (n1, n2) => parseInt(n1) <= parseInt(n2) ? parseInt(n1)<parseInt(n2) ? "Less" : "Equal" : "Greater"

console.log("12","13", compareIntegers("12","13"))
console.log("875","799",compareIntegers("875","799"))
console.log("1000","1001",compareIntegers("1000","1001"))
console.log("3000","2001",compareIntegers("3000","2001"))
console.log("3000","3000", compareIntegers("3000","3000"))
