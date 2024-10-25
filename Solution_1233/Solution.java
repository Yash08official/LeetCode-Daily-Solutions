
class Solution {
    public List<String> removeSubfolders(String[] folder) {
        // Step 1: Sort the array of folder paths lexicographically.
        // This makes sure that any parent folder appears before its subfolders.
        Arrays.sort(folder);
        
        // Step 2: Initialize a list to store the result with folders that aren't subfolders.
        List<String> ans = new ArrayList<>();
        
        // Step 3: Add the first folder to the result list since it can't be a subfolder of any previous one.
        ans.add(folder[0]);
        
        // Step 4: Iterate through the rest of the folders, starting from the second folder.
        for (int i = 1; i < folder.length; ++i) {
            // Get the length of the last added folder in the result list (potential parent folder).
            int m = ans.get(ans.size() - 1).length();
            // Get the length of the current folder in the sorted list.
            int n = folder[i].length();
            
            // Step 5: Check if the current folder is a subfolder of the last added folder.
            // - If the last added folder's length is greater than or equal to the current folder, 
            //   they can't have a parent-child relationship, so we add the current folder to ans.
            // - Otherwise, check if the current folder starts with the last folder in ans and 
            //   has a '/' right after it, indicating it's a true subfolder.
            if (m >= n || !(ans.get(ans.size() - 1).equals(folder[i].substring(0, m)) && folder[i].charAt(m) == '/')) {
                // Add the current folder to the result list if it's not a subfolder.
                ans.add(folder[i]);
            }
        }
        
        // Step 6: Return the list of folders without subfolders.
        return ans;
    }
}