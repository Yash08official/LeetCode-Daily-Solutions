class Solution {
    // Method to calculate the minimum number of swaps to balance the brackets in a string
    public int minSwaps(String s) {
        // Stack to keep track of unbalanced brackets
        Stack<Character> stack = new Stack<Character>();

        // Iterate through each character in the string
        for (int i = 0; i < s.length(); i++) {
            // Get the current character
            char ch = s.charAt(i);

            // If the character is an opening bracket '['
            if (ch == '[') {
                // Push it onto the stack
                stack.push(ch);
            }
            // If the character is a closing bracket ']'
            else {
                // If the stack is empty or the top of the stack is also a closing bracket
                if (stack.isEmpty() || stack.peek() == ']') {
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
        int totalBrackets = stack.size();
        
        // Half of these are closing brackets
        int closedBrackets = totalBrackets / 2;

        // Return the minimum number of swaps needed, which is half of the remaining unbalanced bracket pairs
        return (closedBrackets + 1) / 2;
    }
}
