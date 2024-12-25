const findMaximum = (arr) => {
    return Math.max(...arr);
}

const findMaximumAlgorithmically = (arr) => {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(findMaximum([1, 2, 3, 4, 5]));
console.log(findMaximumAlgorithmically([1, 2, 3, 4, 5]));