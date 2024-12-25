# Contest Day 2 Problems

## Problem 1: Number After Double Reversal

**Title**: Number After Double Reversal  
**Description**: Given a number `n`, double reverse it and check if the resulting number is equal to the original number. A number is considered equal after double reversal if it remains the same after reversing it twice.  
**Points**: 5  
**Level**: Easy  
**Input Description**: An integer `n`.  
**Output Description**: Print `True` if the number is the same after double reversal, `False` otherwise.  
**Constraint**: `1 ≤ n ≤ 10^9`  
**Example Input**: `123`  
**Example Output**: `True`  

---

## Problem 2: Multiply Strings

**Title**: Multiply Strings  
**Description**: Multiply two non-negative integers represented as strings.  
**Points**: 15  
**Level**: Easy  
**Input Description**: Two non-negative integers represented as strings.  
**Output Description**: The product of the two integers represented as a string.  
**Constraint**: The input strings are valid non-negative integers.  
**Example Input**: `2,3`  
**Example Output**: `6`  

---

## Problem 3: Find Median of Array

**Title**: Find Median of Array  
**Description**: Find the median of an array.  
**Points**: 5  
**Level**: Easy  
**Input Description**: Size of array and array of integers.  
**Output Description**: A float representing the median.  
**Constraint**: `0 ≤ N1, N2 ≤ 10^3, -10^6 ≤ A[i] ≤ 10^6`  
**Example Input**: `3,[1, 3, 2]`  
**Example Output**: `2.0`  

---

## Problem 4: Fibonacci Sequence

**Title**: Fibonacci Sequence  
**Description**: Given an integer `n`, return the n-th number in the Fibonacci sequence.  
**Points**: 5  
**Level**: Easy  
**Input Description**: An integer `n`.  
**Output Description**: An integer representing the n-th Fibonacci number.  
**Constraint**: `0 ≤ n ≤ 30`  
**Example Input**: `2`  
**Example Output**: `1`  

---

## Problem 5: Isomorphic Strings

**Title**: Isomorphic Strings  
**Description**: Given two strings `s` and `t`, determine if they are isomorphic. Two strings are isomorphic if the characters in one string can be replaced to get the other string. All occurrences of a character in `s` must map to the same character in `t`, and vice versa.  
**Points**: 10  
**Level**: Mid  
**Input Description**: Two strings `s` and `t` of the same length.  
**Output Description**: `True` if the strings are isomorphic, `False` otherwise.  
**Constraint**: `1 ≤ len(s), len(t) ≤ 10^5`, `s` and `t` will have the same length.  
**Example Input**: `s = "egg", t = "add"`  
**Example Output**: `True`  

---

## Problem 6: Third Unique Character

**Title**: Third Unique Character  
**Description**: Find the index of the THIRD non-repeating character in a string.  
**Points**: 5  
**Level**: Easy  
**Input Description**: A string `s`.  
**Output Description**: Print an integer representing the index. Return `-1` if no unique character exists.  
**Constraint**: `1 ≤ len(s) ≤ 10^5`  
**Example Input**: `leetcode`  
**Example Output**: `4`  

---

## Problem 7: Valid Parentheses

**Title**: Valid Parentheses  
**Description**: Determine if a string of parentheses is valid. A string is valid if every opening parenthesis has a closing match and is properly nested.  
**Points**: 10  
**Level**: Hard  
**Input Description**: A string `s` containing only `(`, `)`, `{`, `}`, `[`, and `]`.  
**Output Description**: `True` or `False` indicating if the string is valid.  
**Constraint**: `1 ≤ len(s) ≤ 10^4`  
**Example Input**: `s = "()"`  
**Example Output**: `True`  

---

## Problem 8: Roman to Integer

**Title**: Roman to Integer  
**Description**: Given a Roman numeral, convert it to an integer. Roman numerals are represented by seven different symbols: I, V, X, L, C, D, and M.  
**Points**: 10  
**Level**: Mid  
**Input Description**: A string `roman` representing a Roman numeral.  
**Output Description**: An integer representing the value of the Roman numeral.  
**Constraint**: `1 ≤ roman.length ≤ 15`, The input is guaranteed to be a valid Roman numeral.  
**Example Input**: `III`  
**Example Output**: `3`  

---

## Problem 9: Integer to Roman

**Title**: Integer to Roman  
**Description**: Given an integer `num`, convert it to a Roman numeral. Roman numerals are represented by seven different symbols: I, V, X, L, C, D, and M.  
**Points**: 15  
**Level**: Hard  
**Input Description**: An integer `num` (1 ≤ `num` ≤ 3999).  
**Output Description**: A string representing the Roman numeral of the integer.  
**Constraint**: `1 ≤ num ≤ 3999`  
**Example Input**: `num = 3`  
**Example Output**: `III`  

---

## Problem 10: Edit Distance

**Title**: Edit Distance  
**Description**: Given two strings `word1` and `word2`, find the minimum number of operations (insert, delete, replace) required to convert `word1` into `word2`.  
**Points**: 15  
**Level**: Hard  
**Input Description**: Two strings `word1` and `word2`.  
**Output Description**: Integer representing the minimum edit distance.  
**Constraint**: `1 ≤ len(word1), len(word2) ≤ 500`  
**Example Input**: `word1 = "horse", word2 = "ros"`  
**Example Output**: `3`  

---

## Problem 11: Reverse Words in a String

**Title**: Reverse Words in a String  
**Description**: Given an input string `s`, reverse the order of the words. A word is defined as a sequence of non-space characters. The words in `s` will be separated by at least one space. Return a string of the words in reverse order concatenated by a single space.  
**Points**: 10  
**Level**: Mid  
**Input Description**: A string `s` consisting of words separated by spaces.  
**Output Description**: A string with the words in reverse order, each separated by a single space.  
**Constraint**: `1 ≤ length of s ≤ 10^4`  
**Example Input**: `s = "the sky is blue"`  
**Example Output**: `blue is sky the`
