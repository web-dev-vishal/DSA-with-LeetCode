// 1381 question on leetcode 

class CustomStack {
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.stack = [];       // stores actual values
    this.inc = [];         // stores pending increments at each index
  }

  push(x) {
    // Only push if we haven't hit the max capacity
    if (this.stack.length < this.maxSize) {
      this.stack.push(x);
      this.inc.push(0); // no pending increment for this new element yet
    }
  }

  pop() {
    const top = this.stack.length - 1;

    // Stack is empty → return -1
    if (top < 0) return -1;

    // Apply the pending increment to the top element
    const val = this.stack[top] + this.inc[top];

    // Pass the increment DOWN to the element below
    // so it doesn't get lost when we remove this element
    if (top > 0) {
      this.inc[top - 1] += this.inc[top];
    }

    // Remove top element from both arrays
    this.stack.pop();
    this.inc.pop();

    return val;
  }

  inc(k, val) {
    // Find the actual boundary index (can't exceed stack size)
    const boundaryIndex = Math.min(k, this.stack.length) - 1;

    // Only mark if stack is non-empty
    if (boundaryIndex >= 0) {
      // Mark: "when element at boundaryIndex is popped, add val"
      // It will naturally pass down to elements below it
      this.inc[boundaryIndex] += val;
    }
  }
}
/*
1. Operations:
CustomStack(3)
push(1)
push(2)
inc(2, 100)
pop()
pop()
pop()

Output:
102
101
-1

Explanation:
Step-by-step explanation

Start:
stack = []
inc = []

push(1)
→ stack = [1]
→ inc = [0]

push(2)
→ stack = [1, 2]
→ inc = [0, 0]

inc(2, 100)
→ boundaryIndex = 1
→ inc = [0, 100]

pop()
→ val = 2 + 100 = 102
→ pass increment down → inc[0] = 100
→ stack = [1]
→ inc = [100]

pop()
→ val = 1 + 100 = 101
→ stack = []
→ inc = []

pop()
→ stack empty → -1


2. Operations:
CustomStack(2)
push(5)
push(2)
push(3)
inc(3, 10)
pop()
pop()

Output:
12
15

Explanation:
Step-by-step explanation

Start:
stack = []
inc = []

push(5)
→ [5], inc = [0]

push(2)
→ [5, 2], inc = [0, 0]

push(3)
→ ignored (stack full)

inc(3, 10)
→ boundaryIndex = 1
→ inc = [0, 10]

pop()
→ val = 2 + 10 = 12
→ pass down → inc[0] = 10
→ stack = [5], inc = [10]

pop()
→ val = 5 + 10 = 15


❌ wrong input & output

3. Operations:
CustomStack(2)
inc(1, 100)
pop()

Output:
-1

Explanation:

Stack is empty initially

inc(1, 100)
→ boundaryIndex = -1 → ignored

pop()
→ stack empty → return -1

This is not a bug, but an edge case where increment has no effect.

*/