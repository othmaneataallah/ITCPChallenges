const countVowels = (s) => {
    const vowels = "aeiou";
    return s.split("").filter(char => vowels.includes(char)).length;
}

function countVowelsAlgorithmically(s) {
    let count = 0;
    const vowels = "aeiou";
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (s[i] === vowels[j]) {
                count++;
                break;
            }
        }
    }
    return count;
}

console.log(countVowels("hello"));
console.log(countVowelsAlgorithmically("hello"));