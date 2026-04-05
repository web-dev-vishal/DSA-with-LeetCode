// question no :- 148 on leetcode
var sortList = function(head) {
    // Base case: empty or single node
    if (!head || !head.next) return head;

    // Step 1: Find middle
    let slow = head;
    let fast = head;
    let prev = null;

    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    // Step 2: Split list into two halves
    prev.next = null; // cut the list

    // Step 3: Sort both halves
    let left = sortList(head);
    let right = sortList(slow);

    // Step 4: Merge sorted halves
    return merge(left, right);
};

// Helper function to merge two sorted lists
function merge(l1, l2) {
    let dummy = new ListNode(0);
    let tail = dummy;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            tail.next = l1;
            l1 = l1.next;
        } else {
            tail.next = l2;
            l2 = l2.next;
        }
        tail = tail.next;
    }

    // Attach remaining nodes
    tail.next = l1 || l2;

    return dummy.next;
}

/*
Input:  4 → 2 → 1 → 3
Output: 1 → 2 → 3 → 4
*/