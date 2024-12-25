#include <stdio.h>

void reverseString(char str[]) {
    int length = 0;
    
    while (str[length] != '\0') {
        length++;
    }

    for (int i = 0; i < length / 2; i++) {
        char temp = str[i];
        str[i] = str[length - 1 - i];
        str[length - 1 - i] = temp;
    }
}

int main() {
    char string[] = "Hello World";

    printf("Original string: %s\n", string);

    reverseString(string);

    printf("Reversed string: %s\n", string);

    return 0;
}
