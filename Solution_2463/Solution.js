var minimumTotalDistance = function(robot, factory) {
    // Sort robots and factories by their positions to optimize pairing
    robot.sort((a, b) => a - b);
    factory.sort((a, b) => a[0] - b[0]);

    // Initialize memoization table with undefined to indicate uncomputed states
    const memo = Array.from({ length: robot.length }, () => Array(factory.length).fill(undefined));

    // Recursive DFS function to calculate minimum distance
    function dfs(i, j) {
        // Base Case: All robots have been repaired
        if (i === robot.length) return 0;
        
        // Base Case: No more factories left, but robots still need repairs
        if (j === factory.length) return Number.MAX_SAFE_INTEGER / 1000;

        // Check if result is already computed
        if (memo[i][j] !== undefined) return memo[i][j];

        // Option 1: Skip current factory and try the next one
        let ans = dfs(i, j + 1);

        // Option 2: Use the current factory to repair up to its limit of robots
        let t = 0; // Tracks accumulated distance for pairing robots with this factory
        for (let k = 0; k < factory[j][1]; ++k) { // Loop up to the factory's repair limit
            if (i + k === robot.length) break; // Break if there are no more robots left

            // Calculate the distance for assigning robot[i + k] to factory[j]
            t += Math.abs(robot[i + k] - factory[j][0]);

            // Update ans with the minimum distance found between skipping or using this factory
            ans = Math.min(ans, t + dfs(i + k + 1, j + 1));
        }

        // Store the result in the memoization table for this robot-factory pair
        memo[i][j] = ans;

        // Return the minimum distance for the current state
        return ans;
    }

    // Start the DFS search with the first robot and the first factory
    return dfs(0, 0);
};
