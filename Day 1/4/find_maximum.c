#include <stdio.h>

int findMax(int arr[], int len) {
    int max = arr[0];
    for (int i = 1; i < len; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

int main() {
    int len;

    printf("Enter the size of the array: ");
    scanf("%d", &len);

    int arr[len];
    printf("Enter %d integers:\n", len);
    for (int i = 0; i < len; i++) {
        scanf("%d", &arr[i]);
    }

    printf("Maximum number: %d\n", findMax(arr, len));
    return 0;
}
