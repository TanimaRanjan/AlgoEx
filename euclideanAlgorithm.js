/*
Euclidean algorithm
In mathematics, the Euclidean algorithm, or Euclid's algorithm, is an efficient method for computing the
 greatest common divisor (GCD) of two numbers, the largest number that divides both of them without leaving a remainder.

The Euclidean algorithm is based on the principle that the greatest common divisor of two numbers does not change 
if the larger number is replaced by its difference with the smaller number. For example, 21 is the GCD of 252 and 105 
(as 252 = 21 × 12 and 105 = 21 × 5), and the same number 21 is also the GCD of 105 and 252 − 105 = 147. 
Since this replacement reduces the larger of the two numbers, repeating this process gives successively 
smaller pairs of numbers until the two numbers become equal. When that occurs, they are the GCD of the original two numbers.

By reversing the steps, the GCD can be expressed as a sum of the two original numbers each multiplied by a positive or 
negative integer, e.g., 21 = 5 × 105 + (−2) × 252. The fact that the GCD can always be expressed in this way is 
known as Bézout's identity.
*/

function euclideanAlgorithm(num1, num2) {
    const a = Math.abs(num1)
    const b = Math.abs(num2)

    return (b === 0 ) ? a : euclideanAlgorithm(b, a % b)
}

console.log(euclideanAlgorithm(0, 0), 0);
console.log(euclideanAlgorithm(2, 0), 2);
console.log(euclideanAlgorithm(0, 2), 2);
console.log(euclideanAlgorithm(1, 2), 1);
console.log(euclideanAlgorithm(2, 1), 1);
console.log(euclideanAlgorithm(6, 6), 6);
console.log(euclideanAlgorithm(2, 4), 2);
console.log(euclideanAlgorithm(4, 2), 2);
console.log(euclideanAlgorithm(12, 4), 4);
console.log(euclideanAlgorithm(4, 12), 4);
console.log(euclideanAlgorithm(5, 13), 1);
console.log(euclideanAlgorithm(27, 13), 1);
console.log(euclideanAlgorithm(24, 60), 12);
console.log(euclideanAlgorithm(60, 24), 12);
console.log(euclideanAlgorithm(252, 105), 21);
console.log(euclideanAlgorithm(105, 252), 21);
console.log(euclideanAlgorithm(1071, 462), 21);
console.log(euclideanAlgorithm(462, 1071), 21);
console.log(euclideanAlgorithm(462, -1071), 21);
console.log(euclideanAlgorithm(-462, -1071), 21);