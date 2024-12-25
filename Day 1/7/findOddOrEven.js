const findOddOrEven = (n) => {
    return n % 2 === 0 ? "Even" : "Odd";
}

const findOddOrEvenAlgorithmically = (n) => {
    return (n & 1) === 0 ? "Even" : "Odd";
}

console.log(findOddOrEven(4));
console.log(findOddOrEvenAlgorithmically(4));