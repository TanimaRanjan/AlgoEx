

function verifyPrime(num) {
    var prime = false;
    for (i = 2; i < num; i++) {
        if (num % i === 0) {
            console.log("Its a not prime");
            break;
            prime = false;
        } else {
            prime = true;
        }
    }
    if (prime) {
        console.log("Its a prime");
    }
}
