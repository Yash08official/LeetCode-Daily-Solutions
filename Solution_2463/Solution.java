class Solution {
    private long[][] f;
    private List<Integer> robot;
    private int[][] factory;

    public long minimumTotalDistance(List<Integer> robot, int[][] factory) {
        // Sort robots and factories by position to enable nearest pairing
        Collections.sort(robot);
        Arrays.sort(factory, (a, b) -> a[0] - b[0]);

        this.robot = robot;
        this.factory = factory;
        f = new long[robot.size()][factory.length];
        for (int i = 0; i < robot.size(); i++) {
            Arrays.fill(f[i], -1);  // Initialize with -1 to denote uncomputed values
        }

        return dfs(0, 0);
    }

    private long dfs(int i, int j) {
        // All robots are repaired
        if (i == robot.size()) {
            return 0;
        }
        // No more factories to repair remaining robots
        if (j == factory.length) {
            return Long.MAX_VALUE / 1000;
        }
        // Return cached result if computed
        if (f[i][j] != -1) {
            return f[i][j];
        }

        // Case 1: Skip current factory
        long ans = dfs(i, j + 1);
        
        // Case 2: Use current factory to repair up to `limit` robots
        long t = 0;
        for (int k = 0; k < factory[j][1]; ++k) {
            if (i + k == robot.size()) {
                break;
            }
            // Accumulate distance for assigning robot[i + k] to factory[j]
            t += Math.abs(robot.get(i + k) - factory[j][0]);
            ans = Math.min(ans, t + dfs(i + k + 1, j + 1));
        }

        f[i][j] = ans;  // Cache result
        return ans;
    }
}
