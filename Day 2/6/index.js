/**
 * @param {string} s
 * @returns {number}
 */
function thirdUniqueCharacter(s) {
    const charCount = {};
    const uniqueIndices = [];
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (let i = 0; i < s.length; i++) {
        if (charCount[s[i]] === 1) {
            uniqueIndices.push(i);
            if (uniqueIndices.length === 3) return uniqueIndices[2];
        }
    }

    return -1;
}
