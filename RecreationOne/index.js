function square(n) {
    let divisors = [];
    for (let i = 1; i <= n; i++) {
        const isDivisor = (n % i) == 0;
        if (isDivisor) {
            divisors.push(Math.pow(i, 2))
        }
    }
    return [n, divisors.reduce((counter, num) => counter + num)]
}

function listSquared(m, n) {
    let results = [];
    for (var i = m; i <= n; i++) {
        let result = square(i);
        const isInt = (Math.sqrt(result[1]) % 1) == 0;
        if (isInt) {
            results.push(result)
        }
    }
    return results;
}

let divisors = listSquared(42, 250)

console.log(divisors);


