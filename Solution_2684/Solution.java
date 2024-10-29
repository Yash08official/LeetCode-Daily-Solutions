class Solution {
    public int maxMoves(int[][] grid) {
        int m = grid.length, n = grid[0].length;
        
        // Initialize set q with all row indices of the first column (starting points)
        Set<Integer> q = IntStream.range(0, m).boxed().collect(Collectors.toSet());
        
        // Process each column up to the second-to-last column
        for (int j = 0; j < n - 1; ++j) {
            Set<Integer> t = new HashSet<>();
            
            // Check each row in the current column where moves are still possible
            for (int i : q) {
                // Attempt moves to adjacent cells in the next column
                for (int k = i - 1; k <= i + 1; ++k) {
                    if (k >= 0 && k < m && grid[i][j] < grid[k][j + 1]) {
                        t.add(k);  // Add row index k if the move is valid
                    }
                }
            }
            
            // If no moves are possible from this column, return the max moves made
            if (t.isEmpty()) {
                return j;
            }
            
            // Update q to the set of valid rows in the next column
            q = t;
        }
        
        // If we can reach the last column, the maximum moves possible is n - 1
        return n - 1;
    }
}