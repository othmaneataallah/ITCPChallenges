const sumOfDigits = (n) => {
    return n.toString()
            .split("")
            .map(Number)
            .reduce((sum, digit) => sum + digit, 0);
}

const sumOfDigitsAlgorithmically = (n) => {
    let sum = 0;
    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    return sum;
}

console.log(sumOfDigits(123));
console.log(sumOfDigitsAlgorithmically(123));