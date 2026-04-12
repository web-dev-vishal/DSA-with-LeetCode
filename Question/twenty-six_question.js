
var removeNodes = function(head) {

    // Stack will store nodes in decreasing order (front to back)
    const stack = [];

    let curr = head;

    // Traverse the entire linked list
    while (curr !== null) {

        // Pop all nodes from stack that are SMALLER than current node
        // Because current node (greater value) is to their right → they must be removed
        while (stack.length > 0 && stack[stack.length - 1].val < curr.val) {
            stack.pop();
        }

        // Current node survives (for now) — push it
        stack.push(curr);

        curr = curr.next;
    }

    // Re-link all surviving nodes from the stack
    for (let i = 0; i < stack.length - 1; i++) {
        stack[i].next = stack[i + 1];
    }

    // Last node's next must be null (end of list)
    stack[stack.length - 1].next = null;

    // First node in stack is the new head
    return stack[0];
};