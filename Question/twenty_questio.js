var pairSum = function(head) {
    // Step 1: Find middle
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Step 2: Reverse second half
    let prev = null;
    let curr = slow;

    while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    // Step 3: Compare twin sums
    let first = head;
    let second = prev;
    let maxSum = 0;

    while (second) {
        maxSum = Math.max(maxSum, first.val + second.val);
        first = first.next;
        second = second.next;
    }

    return maxSum;
};
/*
input :- 1 → 2 → 3 → 4
find middle :- slow → 3
reverse second half :- 4 → 3
compare :- 1 + 4 = 5
           2 + 3 = 5
output :- 5
*/