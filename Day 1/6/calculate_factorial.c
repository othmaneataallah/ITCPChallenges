#include <stdio.h>

int calculateFactorial(int n) {
    int factorial = 1;
    for (int i = 1; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}

int main() {
    int n;

    printf("Enter a non-negative integer (0 ≤ n ≤ 10): ");
    scanf("%d", &n);

    if (n < 0 || n > 10) {
        printf("Invalid input. Please enter a number between 0 and 10.\n");
    } else {
        printf("Factorial of %d: %d\n", n, calculateFactorial(n));
    }

    return 0;
}
