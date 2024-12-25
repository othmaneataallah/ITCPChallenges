#include <stdio.h>

const char* findOddOrEven(int n) {
    return (n % 2 == 0) ? "Even" : "Odd";
}

int main() {
    int n;

    printf("Enter an integer: ");
    scanf("%d", &n);

    printf("%s\n", findOddOrEven(n));
    return 0;
}
