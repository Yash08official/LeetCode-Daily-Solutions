/**
 * @param {number[][]} times
 * @param {number} targetFriend
 * @return {number}
 */
var smallestChair = function(times, targetFriend) {
    const n = times.length;

    // Array to store [arrival, leaving, friendIndex]
    const ts = times.map((time, i) => [time[0], time[1], i]);

    // Min-heap (priority queue) to track available chairs
    const availableChairs = [];
    for (let i = 0; i < n; i++) {
        availableChairs.push(i);
    }
    availableChairs.sort((a, b) => a - b);  // Simulating heap

    // Min-heap to track when chairs become available
    const busy = [];

    // Sort times by arrival time
    ts.sort((a, b) => a[0] - b[0]);

    // Helper function to mimic heap behavior
    const pushBusyHeap = (heap, item) => {
        heap.push(item);
        heap.sort((a, b) => a[0] - b[0]);  // Sorting by leaving time
    };

    // Process each friend in order of arrival
    for (let i = 0; i < n; i++) {
        const [arrival, leaving, friendIndex] = ts[i];

        // Free chairs of friends who have already left by the current time
        while (busy.length > 0 && busy[0][0] <= arrival) {
            availableChairs.push(busy[0][1]);
            availableChairs.sort((a, b) => a - b);  // Keep the available chairs sorted
            busy.shift();
        }

        // Assign the smallest available chair
        const chair = availableChairs.shift();

        // If it's the target friend, return the chair number
        if (friendIndex === targetFriend) {
            return chair;
        }

        // Mark the chair as busy until the friend's leaving time
        pushBusyHeap(busy, [leaving, chair]);
    }

    return -1;  // Shouldn't reach here, but just in case
};
