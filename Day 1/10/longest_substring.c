#include <stdio.h>
#include <string.h>

int lengthOfLongestSubstring(char *s) {
    int n = strlen(s);
    int maxLength = 0;
    int map[256] = {0};
    int left = 0;
    
    for (int right = 0; right < n; right++) {
        if (map[s[right]] > 0) {
            left = (map[s[right]] > left) ? map[s[right]] : left;
        }
        map[s[right]] = right + 1;
        maxLength = (right - left + 1 > maxLength) ? right - left + 1 : maxLength;
    }
    
    return maxLength;
}

int main() {
    char s[100001];
    printf("Enter a string: ");
    scanf("%s", s);
    
    int result = lengthOfLongestSubstring(s);
    printf("Length of longest substring without repeating characters: %d\n", result);
    
    return 0;
}
