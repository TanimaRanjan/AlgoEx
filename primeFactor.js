
function primeFactor(n) {
    var factor = [];
    var divisor = 2;

    while (n > 2) {
        if (n % divisor === 0) {
            factor.push(divisor);
            n = n / divisor;
        } else {
            divisor++;
        }

    }

    console.log(factor);
}