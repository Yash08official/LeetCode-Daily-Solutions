class Solution {
    public int minAddToMakeValid(String s) {

        // Two variables to keep track of unbalanced parentheses.
        // 'open' counts unmatched opening parentheses '(', 
        // 'closed' counts unmatched closing parentheses ')'.
        int open = 0, closed = 0;

        // Iterate through each character in the string 's'.
        for (char c : s.toCharArray()) {

            // If the character is an opening parenthesis '(',
            // increment the 'open' counter.
            if (c == '(') {
                open++;
            }
            // If the character is a closing parenthesis ')' and there are unmatched opening parentheses,
            // decrement the 'open' counter (meaning one pair is balanced).
            else if (open > 0) {
                open--;
            }
            // If there's no unmatched opening parenthesis and we find a closing parenthesis,
            // increment the 'closed' counter (meaning this closing parenthesis is unmatched).
            else {
                closed++;
            }
        }

        // The total number of additions required to balance the parentheses
        // is the sum of unmatched opening and unmatched closing parentheses.
        return open + closed;
    }
}
