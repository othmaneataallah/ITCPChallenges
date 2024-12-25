const calculateFactorial = (n) => {
    if (n === 0) return 1;
    return Array.from({ length: n }, (_, i) => i + 1)
                .reduce((product, num) => product * num, 1);
}

const calculateFactorialAlgorithmically = (n) => {
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}

console.log(calculateFactorial(5));
console.log(calculateFactorialAlgorithmically(5));