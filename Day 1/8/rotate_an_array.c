#include <stdio.h>

void rotateArray(int arr[], int n, int k) {
    k = k % n;
    int rotatedArray[n];
    
    for (int i = 0; i < n; i++) {
        rotatedArray[(i + k) % n] = arr[i];
    }
    
    for (int i = 0; i < n; i++) {
        printf("%d ", rotatedArray[i]);
    }
    printf("\n");
}

int main() {
    int n, k;
    
    printf("Enter the size of the array: ");
    scanf("%d", &n);
    
    int arr[n];
    printf("Enter the elements of the array: ");
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }
    
    printf("Enter the number of rotations: ");
    scanf("%d", &k);
    
    rotateArray(arr, n, k);
    return 0;
}
