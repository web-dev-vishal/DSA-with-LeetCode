// 155 question on leetcode

class MinStack {
  constructor() {
    this.stack = [];       // stores actual values
    this.minStack = [];    // stores current minimum at each level
  }

  push(val) {
    // Push actual value
    this.stack.push(val);

    // Push the current minimum:
    // If minStack is empty, this value IS the minimum
    // Otherwise, compare with the last known minimum
    const currentMin = this.minStack.length === 0
      ? val
      : Math.min(val, this.minStack[this.minStack.length - 1]);

    this.minStack.push(currentMin);
  }

  pop() {
    // Remove top from both stacks to stay in sync
    this.stack.pop();
    this.minStack.pop();
  }

  top() {
    // Return the top of the main stack
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    // Top of minStack always holds the current minimum
    return this.minStack[this.minStack.length - 1];
  }
}