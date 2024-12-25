#include <stdio.h>

int majorityElement(int arr[], int n) {
    int candidate = arr[0];
    int count = 1;

    for (int i = 1; i < n; i++) {
        if (arr[i] == candidate) {
            count++;
        } else {
            count--;
            if (count == 0) {
                candidate = arr[i];
                count = 1;
            }
        }
    }

    int majorityCount = 0;
    for (int i = 0; i < n; i++) {
        if (arr[i] == candidate) {
            majorityCount++;
        }
    }

    if (majorityCount > n / 2) {
        return candidate;
    }

    return -1;
}

int main() {
    int arr[] = {3, 3, 4, 3};
    int size = sizeof(arr) / sizeof(arr[0]);

    int result = majorityElement(arr, size);
    printf("Majority element: %d\n", result);

    return 0;
}
