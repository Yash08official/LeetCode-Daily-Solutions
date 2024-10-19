class Solution {
    public char findKthBit(int n, int k) {
        // The length of the sequence at level n is 2^n - 1
        int len = (int)Math.pow(2, n) - 1;
        
        // Start the recursion to find the k-th bit
        return recur(len, k);
    }

    // Recursive function to find the k-th bit in the sequence of length 'len'
    public char recur(int len, int k){
        // Base case: If the sequence length is 1, the sequence is just "0"
        if (len == 1) {
            return '0'; // The first sequence S1 is just '0'
        }

        // Calculate the midpoint (middle position) of the current sequence
        int half = len / 2; // Half length of the sequence (left part)
        int middle = half + 1; // Middle point (1-based index)

        // Print current status for debugging purposes
        System.out.println("len -> "+ len + " ,middle-> " + middle + " ,k-> "+ k);

        // If k is the middle position, the answer is always '1'
        if (k == middle) {
            return '1'; 
        } else if (k < middle) { // If k is in the left half
            return recur(half, k); // Recursively search in the left half
        } else { // If k is in the right half
            // Recursively find the corresponding bit in the left half 
            // and invert it (since the right half is the inverted reverse of the left)
            char ans = recur(half, 1 + len - k); 
            return (ans == '0') ? '1' : '0'; // Invert the bit
        }
    }
}
