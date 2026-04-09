// 2 question on leetcode

// Definition for singly-linked list
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(0);   // dummy head
    let current = dummy;           // pointer for result list
    let carry = 0;                 // carry value

    // loop until both lists and carry are exhausted
    while (l1 || l2 || carry) {
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;

        let sum = val1 + val2 + carry;

        carry = Math.floor(sum / 10); // update carry
        let digit = sum % 10;         // current digit

        current.next = new ListNode(digit); // create node
        current = current.next;             // move forward

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return dummy.next; // return result list
};

/*
input :- l1 = [2 → 4 → 3]
         l2 = [5 → 6 → 4]

output :- [7 → 0 → 8]

Explanation :- (342 + 465 = 807)
*/