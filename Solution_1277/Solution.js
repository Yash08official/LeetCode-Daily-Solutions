var countSquares = function(matrix) {
    let m = matrix.length;              // Number of rows
    let n = matrix[0].length;           // Number of columns
    let f = Array.from({ length: m }, () => Array(n).fill(0)); // DP array initialized to 0
    let ans = 0;                        // Variable to store total number of squares

    // Iterate through each cell in the matrix
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (matrix[i][j] === 0) {
                continue;               // Skip if the cell is 0 (cannot form a square)
            }

            if (i === 0 || j === 0) {
                f[i][j] = 1;            // Base case: cells in first row or column can only form 1x1 squares
            } else {
                // Calculate the largest square ending at (i, j) using the minimum of top, left, and top-left neighbors
                f[i][j] = Math.min(f[i - 1][j - 1], Math.min(f[i - 1][j], f[i][j - 1])) + 1;
            }

            ans += f[i][j];             // Add the count of squares ending at this cell to the total count
        }
    }

    return ans;                         // Return the total number of square submatrices
};
