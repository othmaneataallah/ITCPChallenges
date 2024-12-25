const reverseString = (str) => {
    return str.split("").reverse().join("");
}

const reverseStringAlgorithmically = (str) => {
    let reversed = "";
    
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
}


console.log(reverseString("hello"));
console.log(reverseStringAlgorithmically("hello"));