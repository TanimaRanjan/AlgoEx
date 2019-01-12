/* 
Fizzbuzz. 
Write a programe to log the number from 1 to n. Multiples of of 3 should print fizz
Multiples of 5 should print buzz
Multiples of both should print fizzbuzz
*/

function fizzBuzz(n) { 
    console.log('Fizz Buzz to ', n)
    for(let i=1;i<=n;i++) {
        if(i%3 == 0 && i%5 == 0) {
            console.log("fizzbuzz")
        } else if(i%3 == 0) {
            console.log("fizz")
        } else if(i%3 == 0) {
            console.log("buzz")
        } else {
            console.log(i)
        }
    }

}

fizzBuzz(16);

fizzBuzz(50);