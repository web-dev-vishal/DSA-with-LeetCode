class MyStack {
  constructor() {
    // We use a plain array as our queue
    // Queue rules: push to back → arr.push(), remove from front → arr.shift()
    this.queue = [];
  }

  push(x) {
    // Step 1: Add new element to the back of the queue
    this.queue.push(x);

    // Step 2: Rotate all elements BEFORE the new one to the back
    // This brings the new element (x) to the FRONT
    let rotations = this.queue.length - 1;
    while (rotations > 0) {
      // Take from front, put at back
      this.queue.push(this.queue.shift());
      rotations--;
    }
    // Now the queue front always holds the most recently pushed element
  }

  pop() {
    // Front of queue = top of stack → just remove and return it
    return this.queue.shift();
  }

  top() {
    // Peek the front without removing
    return this.queue[0];
  }

  empty() {
    // Stack is empty if queue has no elements
    return this.queue.length === 0;
  }
}