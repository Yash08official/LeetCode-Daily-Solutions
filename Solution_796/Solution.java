package Solution_796;

class Solution {
    public boolean rotateString(String s, String goal) {
        
        //Check if lengths are the same
        if(s.length() != goal.length()){
            return false;
        }

        //Concatenate s with itself
        String doubles = s + s;

        //Check if goal is a substring of doubleS
        return doubles.contains(goal);

    }
}
