const palindromeCheck = (s) => {
    const reversed = s.split("").reverse().join("");
    return s === reversed;
}

const palindromeCheckAlgorithmically = (s) => {
    const n = s.length;
    for (let i = 0; i < n / 2; i++) {
        if (s[i] !== s[n - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(palindromeCheck("madam"));
console.log(palindromeCheckAlgorithmically("madam"));