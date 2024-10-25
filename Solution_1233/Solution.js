var removeSubfolders = function(folder) {
    // Step 1: Sort the array of folder paths lexicographically.
    // This ensures that any parent folder appears before its subfolders.
    folder.sort();
    
    // Step 2: Initialize an array to store the result with folders that aren't subfolders.
    const ans = [];
    
    // Step 3: Add the first folder to the result array since it can't be a subfolder of any previous one.
    ans.push(folder[0]);
    
    // Step 4: Iterate through the rest of the folders, starting from the second folder.
    for (let i = 1; i < folder.length; ++i) {
        // Get the length of the last added folder in the result array (potential parent folder).
        const m = ans[ans.length - 1].length;
        // Get the length of the current folder in the sorted list.
        const n = folder[i].length;

        // Step 5: Check if the current folder is a subfolder of the last added folder.
        // - If the last added folder's length is greater than or equal to the current folder,
        //   they can't have a parent-child relationship, so we add the current folder to ans.
        // - Otherwise, check if the current folder starts with the last folder in ans and
        //   has a '/' right after it, indicating it's a true subfolder.
        if (m >= n || !(ans[ans.length - 1] === folder[i].substring(0, m) && folder[i].charAt(m) === '/')) {
            // Add the current folder to the result array if it's not a subfolder.
            ans.push(folder[i]);
        }
    }

    // Step 6: Return the array of folders without subfolders.
    return ans;
};

// Example usage:
const folders = ["/a", "/a/b", "/c/d", "/c/d/e", "/c/f"];
console.log(removeSubfolders(folders)); // Output: ["/a", "/c/d", "/c/f"]
