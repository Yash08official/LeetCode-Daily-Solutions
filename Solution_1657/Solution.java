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
