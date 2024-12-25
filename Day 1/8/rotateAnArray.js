const rotateAnArray = (arr, k) => {
    const n = arr.length;
    k = k % n;
    return arr.slice(-k).concat(arr.slice(0, n - k));
}

const rotateAnArrayAlgorithmically = (arr, k) => {
    const n = arr.length;
    k = k % n;
    let rotatedArray = new Array(n);
    
    for (let i = 0; i < n; i++) {
        rotatedArray[(i + k) % n] = arr[i];
    }
    
    return rotatedArray;
}

console.log(rotateAnArray([1, 2, 3, 4, 5, 6, 7], 10));
console.log(rotateAnArrayAlgorithmically([1, 2, 3, 4, 5, 6, 7], 10));