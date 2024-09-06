    class Solution {
        public int[] missingRolls(int[] rolls, int mean, int n) {
            int m = rolls.length;
            int totalSum = (n + m) * mean;
            int sum = 0;
            for (int roll : rolls) {
                sum += roll;
            }
            int remainingSum = totalSum - sum;
            if (remainingSum < n || remainingSum > 6 * n) {
                return new int[0];
            }
            int[] result = new int[n];
            int base = remainingSum / n;
            int extra = remainingSum % n;
            for (int i = 0; i < n; i++) {
                result[i] = base + (i < extra ? 1 : 0);
            }
            return result;
        }
    }

