#include <stdio.h>
#include <string.h>

void compressString(char *s) {
    int n = strlen(s);
    char result[2 * n];
    int count = 1, index = 0;

    for (int i = 1; i <= n; i++) {
        if (s[i] == s[i - 1]) {
            count++;
        } else {
            result[index++] = s[i - 1];
            index += sprintf(&result[index], "%d", count);
            count = 1;
        }
    }
    
    result[index] = '\0';
    if (index < n) {
        printf("%s\n", result);
    } else {
        printf("%s\n", s);
    }
}

int main() {
    char s[1001];
    printf("Enter a string: ");
    scanf("%s", s);
    
    compressString(s);
    return 0;
}
