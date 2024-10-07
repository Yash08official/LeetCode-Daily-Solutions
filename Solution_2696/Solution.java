import java.util.Stack;

class Solution {
    // Method to find the minimum length of string after removing 'AB' and 'CD'
    // pairs
    public int minLength(String s) {
        // Stack to store characters for processing
        Stack<Character> stack = new Stack<>();

        // Loop through each character in the string
        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i); // Get the current character at index 'i'

            // If stack is empty, push the character onto the stack
            if (stack.isEmpty()) {
                stack.push(ch);
                continue; // Skip the rest of the loop for this iteration
            }

            // If the current character is 'B' and the top of the stack is 'A', remove 'A'
            if (ch == 'B' && stack.peek() == 'A') {
                stack.pop(); // 'AB' pair found, remove the 'A' from the stack
            }
            // If the current character is 'D' and the top of the stack is 'C', remove 'C'
            else if (ch == 'D' && stack.peek() == 'C') {
                stack.pop(); // 'CD' pair found, remove the 'C' from the stack
            }
            // If no pairs are found, push the current character onto the stack
            else {
                stack.push(ch);
            }
        }

        // Return the size of the stack, which represents the remaining characters
        return stack.size();
    }
}
