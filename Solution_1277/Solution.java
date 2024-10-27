class Solution {
    public int countSquares(int[][] matrix) {
        int m = matrix.length;             // Number of rows in the matrix
        int n = matrix[0].length;           // Number of columns in the matrix
        int[][] f = new int[m][n];          // DP array to store the size of the largest square ending at each cell
        int ans = 0;                        // Variable to keep the count of all squares

        // Iterate through each cell in the matrix
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                if (matrix[i][j] == 0) {
                    continue;               // If the cell value is 0, skip it (cannot form a square)
                }

                if (i == 0 || j == 0) {
                    f[i][j] = 1;            // Base case: first row or first column cells can only form 1x1 squares
                } else {
                    // Calculate the largest square size ending at (i, j) by taking the minimum size from top, left,
                    // and top-left cells, then add 1
                    f[i][j] = Math.min(f[i - 1][j - 1], Math.min(f[i - 1][j], f[i][j - 1])) + 1;
                }

                ans += f[i][j];             // Add the square count for this cell to the total count
            }
        }

        return ans;                         // Return the total number of square submatrices
    }
}
