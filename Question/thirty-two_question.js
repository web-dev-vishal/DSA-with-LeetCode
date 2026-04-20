var maxDistance = function(position, m) {

    // Sort positions so we can greedily place balls left to right
    position.sort((a, b) => a - b);

    const n = position.length;

    // Helper: can we place m balls with at least `gap` distance between each?
    function canPlace(gap) {
        let count = 1;                    // place first ball at leftmost position
        let lastPlaced = position[0];     // track where last ball was placed

        for (let i = 1; i < n; i++) {
            // If this basket is far enough from last placed ball
            if (position[i] - lastPlaced >= gap) {
                count++;                  // place a ball here
                lastPlaced = position[i]; // update last placed position
            }

            // Early exit: already placed all m balls ✅
            if (count === m) return true;
        }

        return false; // couldn't place all m balls
    }

    // Binary search on the answer (minimum distance between balls)
    let left = 1;
    let right = position[n - 1] - position[0]; // max possible distance
    let answer = 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (canPlace(mid)) {
            answer = mid;       // mid works! try larger distance
            left = mid + 1;
        } else {
            right = mid - 1;    // mid doesn't work, try smaller
        }
    }

    return answer;
};
/*
1. input: position = [1, 2, 3, 4, 7]
        m = 3
   output: [1, 2, 3, 4, 7]
   Explanation: 

2. input: position = [5, 4, 3, 2, 1, 1000000000]
   m = 2
   output: [1, 2, 3, 4, 5, 1000000000]
   Explanation:

❌ wrong input & output
3. input: 1000000000 - 1 = 999999999
    output: [1, 2, 8, 12, 17]
    Explanation: 




*/