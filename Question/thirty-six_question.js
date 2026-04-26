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