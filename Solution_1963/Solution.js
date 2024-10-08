/**
 * @param {string} s - Input string containing brackets
 * @return {number} - Minimum number of swaps required to balance the string
 */
var minSwaps = function(s) {
    // Stack to keep track of unbalanced brackets
    let stack = [];

    // Iterate through each character in the string
    for (let i = 0; i < s.length; i++) {
        let ch = s[i]; // Get the current character

        // If the character is an opening bracket '['
        if (ch === '[') {
            // Push it onto the stack
            stack.push(ch);
        }
        // If the character is a closing bracket ']'
        else {
            // If the stack is empty or the top of the stack is also a closing bracket
            if (stack.length === 0 || stack[stack.length - 1] === ']') {
                // Push the closing bracket onto the stack
                stack.push(ch);
            } 
            // If the top of the stack is an opening bracket '['
            else {
                // Pop the opening bracket as it forms a valid pair with the current closing bracket
                stack.pop();
            }
        }
    }

    // Calculate the number of unbalanced brackets remaining in the stack
    let totalBrackets = stack.length;
    
    // Half of these are closing brackets
    let closedBrackets = totalBrackets / 2;

    // Return the minimum number of swaps needed, which is half of the remaining unbalanced bracket pairs
    return Math.floor((closedBrackets + 1) / 2);
};
