// Definition of ListNode
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function removeNthFromEnd(head, n) {

    // create dummy node (helps in edge cases)
    let dummy = new ListNode(0, head);

    let fast = dummy;
    let slow = dummy;

    // move fast pointer n+1 steps
    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }

    // move both pointers
    while (fast !== null) {
        fast = fast.next;
        slow = slow.next;
    }

    // delete the node
    slow.next = slow.next.next;

    return dummy.next;
}