/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function(skill) {
    // Sort the  array in ascending order
    skill.sort((a, b) => a - b);
    // Get the number of players
    const n = skill.length; 

    //Now ,Calculate the target skill for each team
    const target = skill[0] + skill[n - 1]; // Sum of the smallest and largest skill
    let ans = 0; // the total chemistry sum

    //  Use two pointers to pair players
    for (let i = 0, j = n - 1; i < j; i++, j--) {
        // Check if the current pair skill sum matches the target
        if (skill[i] + skill[j] !== target) {
            return -1; // Return -1 if teams cannot be formed with equal skill
        }
        // Calculate the chemistry for the current team and add to total
        ans += skill[i] * skill[j]; // Chemistry is the product of skills
    }

    // Return the total chemistry of all teams
    return ans;
};

console.log(dividePlayers([3, 2, 5, 1, 3, 4])); 
console.log(dividePlayers([3, 4]));
console.log(dividePlayers([1, 1, 2, 3])); 
