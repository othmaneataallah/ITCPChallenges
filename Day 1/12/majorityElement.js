const majorityElement = (arr) => {
    let candidate = arr[0];
    let count = 1;
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === candidate) {
            count++;
        } else {
            count--;
            if (count === 0) {
                candidate = arr[i];
                count = 1;
            }
        }
    }

    let majorityCount = arr.filter(x => x === candidate).length;
    if (majorityCount > arr.length / 2) {
        return candidate;
    }

    return -1;
}

const majorityElementAlgorithmically = (arr) => {
    let candidate = arr[0];
    let count = 1;
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === candidate) {
            count++;
        } else {
            count--;
            if (count === 0) {
                candidate = arr[i];
                count = 1;
            }
        }
    }

    let majorityCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === candidate) {
            majorityCount++;
        }
    }

    if (majorityCount > arr.length / 2) {
        return candidate;
    }

    return -1;
}