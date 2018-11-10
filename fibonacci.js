
function fibonacci(n) {
    var fibo = [0, 1];
    for (var i = 2; i <= n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    console.log(fibo);
}

function fibonacci2(n) {
    if (n <= 1)
        return n;
    else
        return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacci3(n) {
    var j = 0,
        k = 1;
    for (var i = 0; i <= n; i++) {
        h = j + k;
        j = k;
        k = h;
        console.log(h);
    }

}
