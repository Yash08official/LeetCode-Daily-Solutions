/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    // Create a count object to store the frequency of each word in the words array
    const cnt = {};
    for (const w of words) {
        cnt[w] = (cnt[w] || 0) + 1;
    }
    
    // Initialize variables
    const m = s.length; // length of the input string
    const n = words.length; // number of words in the words array
    const k = words[0].length; // length of each word in the words array
    const ans = []; // result array to store the starting indices of the substrings
    
    // Iterate over the input string in chunks of length k
    for (let i = 0; i < k; ++i) {
        // Initialize variables for the current chunk
        let cnt1 = {}; // temporary count object to store the frequency of each word in the current chunk
        let l = i; // starting index of the current chunk
        let r = i; // ending index of the current chunk
        let t = 0; // number of words found in the current chunk
        
        // Iterate over the current chunk
        while (r + k <= m) {
            const w = s.substring(r, r + k); // extract the current word
            r += k; // move the ending index forward
            
            // If the word is not in the count object, reset the temporary count object and the starting index
            if (!cnt.hasOwnProperty(w)) {
                cnt1 = {}; // reset the temporary count object
                l = r; // reset the starting index
                t = 0; // reset the number of words found
                continue;
            }
            
            // Increment the count of the word in the temporary count object
            cnt1[w] = (cnt1[w] || 0) + 1;
            ++t; // increment the number of words found
            
            // If the count of the word in the temporary count object exceeds the count in the count object,
            // decrement the count and move the starting index forward
            while (cnt1[w] > cnt[w]) {
                const remove = s.substring(l, l + k); // extract the word to be removed
                l += k; // move the starting index forward
                cnt1[remove] = (cnt1[remove] || 0) - 1; // decrement the count
                --t; // decrement the number of words found
            }
            
            // If the number of words found equals the number of words in the words array,
            // add the starting index to the result array
            if (t === n) {
                ans.push(l);
            }
        }
    }
    
    return ans; // return the result array
};