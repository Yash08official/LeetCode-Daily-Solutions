class Solution {
    public long dividePlayers(int[] skill) {

        // Sort the skill array in ascending order
        Arrays.sort(skill);
        int n = skill.length; // Get the number of players

        //And now I calculate the target skill for each team
        long target = skill[0] + skill[n - 1]; // Sum of the smallest and largest skill
        long ans = 0; // Set the total chemistry sum

        //now two pointers to pair players
        for (int i = 0, j = n - 1; i < j; ++i, --j) {

            // Check if the current pair skill sum matches the target
            if (skill[i] + skill[j] != target) {
                return -1; // Return -1 if teams cannot be formed with equal skill
            }
            // Calculate the chemistry for the current team and add to total
            ans += (long) skill[i] * skill[j]; // Chemistry is the product of skills
        }

        // Return the total chemistry of all teams
        return ans;
    }
}