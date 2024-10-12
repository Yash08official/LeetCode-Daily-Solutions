var minGroups = function(intervals) {
    // Sort intervals based on the starting value of each interval
    intervals.sort((a, b) => a[0] - b[0]);

    // Create a min-heap (priority queue) to store the end times
    let pq = new MinPriorityQueue();

    // Loop through each interval
    for (let e of intervals) {
        // If the smallest end time is less than the current start time, remove it
        if (!pq.isEmpty() && pq.front().element < e[0]) {
            pq.dequeue();
        }
        // Add the current end time to the priority queue
        pq.enqueue(e[1]);
    }

    // The size of the priority queue represents the minimum number of groups needed
    return pq.size();
};
