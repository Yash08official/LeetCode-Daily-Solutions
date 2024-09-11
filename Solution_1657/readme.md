# 1657. Determine if Two Strings Are Close

Two strings are considered close if you can attain one from the other using the following operations:

Operation 1: Swap any two existing characters.
For example, abcde -> aecdb
Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
You can use the operations on either string as many times as necessary.

Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

Example 1:

Input: word1 = "abc", word2 = "bca"
Output: true
Explanation: You can attain word2 from word1 in 2 operations.
Apply Operation 1: "abc" -> "acb"
Apply Operation 1: "acb" -> "bca"
Example 2:

Input: word1 = "a", word2 = "aa"
Output: false
Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.
Example 3:

Input: word1 = "cabbba", word2 = "abbccc"
Output: true
Explanation: You can attain word2 from word1 in 3 operations.
Apply Operation 1: "cabbba" -> "caabbb"
Apply Operation 2: "caabbb" -> "baaccc"
Apply Operation 2: "baaccc" -> "abbccc"

Constraints:

1 <= word1.length, word2.length <= 105
word1 and word2 contain only lowercase English letters.

# solution :

```java

class Solution {

    public boolean closeStrings(String word1, String word2) {
        // Frequency arrays for each character 'a' through 'z'.
        int[] freq1 = new int[26];
        int[] freq2 = new int[26];

        // Calculate the frequency of each character in word1.
        for (int i = 0; i < word1.length(); ++i) {
            freq1[word1.charAt(i) - 'a']++;
        }

        // Calculate the frequency of each character in word2.
        for (int i = 0; i < word2.length(); ++i) {
            freq2[word2.charAt(i) - 'a']++;
        }

        // Check if there's a character that exists in one word but not the other.
        for (int i = 0; i < 26; ++i) {
            if ((freq1[i] > 0 && freq2[i] == 0) || (freq2[i] > 0 && freq1[i] == 0)) {
                return false; // Words can't be close strings if a character is not shared.
            }
        }

        // Sort the frequency arrays to compare the frequency distribution.
        Arrays.sort(freq1);
        Arrays.sort(freq2);

        // Compare the sorted frequency arrays.
        for (int i = 0; i < 26; ++i) {
            if (freq1[i] != freq2[i]) {
                return false; // If frequencies don't match, words aren't close strings.
            }
        }

        // If all checks pass, the words are close strings.
        return true;
    }
}
```
