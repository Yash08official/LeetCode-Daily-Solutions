/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function(sentence1, sentence2) {
    // Split both sentences into arrays of words
    let words1 = sentence1.split(" ");
    let words2 = sentence2.split(" ");
    
    // Ensure that words1 is the longer array
    if (words1.length < words2.length) {
        let temp = words1;
        words1 = words2;
        words2 = temp;
    }
    
    const m = words1.length, n = words2.length;
    let i = 0, j = 0;

    // Check for matching words from the beginning
    while (i < n && words1[i] === words2[i]) {
        i++;
    }

    // Check for matching words from the end
    while (j < n && words1[m - 1 - j] === words2[n - 1 - j]) {
        j++;
    }

    // Return true if the sum of i and j covers all of words2
    return i + j >= n;
};
