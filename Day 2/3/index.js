/**
 * @param {number} size
 * @param {number[]} arr
 * @returns {number}
 */
function findMedian(size, arr) {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    if (size % 2 === 1) {
        return arr[Math.floor(size / 2)];
    } else {
        let mid1 = arr[size / 2 - 1];
        let mid2 = arr[size / 2];
        return (mid1 + mid2) / 2;
    }
}
