#include <stdio.h>
#include <string.h>

int countVowels(const char *s) {
    int count = 0;
    for (int i = 0; s[i] != '\0'; i++) {
        char c = s[i];
        if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
            count++;
        }
    }
    return count;
}

int main() {
    char s[1001];

    printf("Enter a string: ");

    if (fgets(s, sizeof(s), stdin)) {
        s[strcspn(s, "\n")] = '\0';
    }

    printf("Number of vowels: %d\n", countVowels(s));
    
    return 0;
}
