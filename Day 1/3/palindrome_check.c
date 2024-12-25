#include <stdio.h>
#include <string.h>
#include <stdbool.h>

bool isPalindrome(const char *s) {
    int n = strlen(s);
    for (int i = 0; i < n / 2; i++) {
        if (s[i] != s[n - 1 - i]) {
            return false;
        }
    }
    return true;
}

int main() {
    char s[1001];

    printf("Enter a string: ");
    
    if (fgets(s, sizeof(s), stdin)) {
        s[strcspn(s, "\n")] = '\0';
    }

    if (isPalindrome(s)) {
        printf("True\n");
    } else {
        printf("False\n");
    }

    return 0;
}
