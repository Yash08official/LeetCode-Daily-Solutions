var maxMoves = function(grid) {
    const m = grid.length, n = grid[0].length;
    
    // Initialize a set with all row indices of the first column (starting points)
    let q = new Set(Array.from({ length: m }, (_, i) => i));
    
    // Process each column up to the second-to-last column
    for (let j = 0; j < n - 1; j++) {
        let t = new Set();
        
        // Check each row in the current column where moves are still possible
        for (let i of q) {
            // Attempt moves to adjacent cells in the next column
            for (let k = i - 1; k <= i + 1; k++) {
                if (k >= 0 && k < m && grid[i][j] < grid[k][j + 1]) {
                    t.add(k);  // Add row index k if the move is valid
                }
            }
        }
        
        // If no moves are possible from this column, return the max moves made
        if (t.size === 0) {
            return j;
        }
        
        // Update q to the set of valid rows in the next column
        q = t;
    }
    
    // If we can reach the last column, the maximum moves possible is n - 1
    return n - 1;
};
