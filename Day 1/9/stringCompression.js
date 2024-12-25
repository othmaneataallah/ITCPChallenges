const stringCompression = (s) => {
    let compressed = "";
    let count = 1;
    
    for (let i = 1; i <= s.length; i++) {
        if (s[i] === s[i - 1]) {
            count++;
        } else {
            compressed += s[i - 1] + count;
            count = 1;
        }
    }
    
    return compressed.length < s.length ? compressed : s;
}

const stringCompressionAlgorithmically = (s) => {
    let compressed = [];
    let count = 1;
    let index = 0;
    
    for (let i = 1; i <= s.length; i++) {
        if (s[i] === s[i - 1]) {
            count++;
        } else {
            compressed[index++] = s[i - 1];
            compressed[index++] = count.toString();
            count = 1;
        }
    }
    
    return compressed.join("").length < s.length ? compressed.join("") : s;
}

console.log(stringCompression("aabcccccaaa"));
console.log(stringCompressionAlgorithmically("aabcccccaaa"));