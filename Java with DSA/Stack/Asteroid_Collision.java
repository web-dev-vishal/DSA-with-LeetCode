class Solution {
    public int[] asteroidCollision(int[] asteroids) {

        // Stack stores the asteroids that are still alive
        Stack<Integer> stack = new Stack<>();

        // Traverse every asteroid
        for (int i = 0; i < asteroids.length; i++) {

            // If stack is empty or current asteroid is moving right,
            // there is no collision with previous asteroids.
            if (stack.isEmpty() || asteroids[i] > 0) {
                stack.push(asteroids[i]);

            } else {

                // Keep checking while there can be a collision
                while (!stack.isEmpty()) {

                    // Get the top asteroid
                    int top = stack.peek();

                    // If top asteroid is also moving left,
                    // they will never collide.
                    if (top < 0) {
                        stack.push(asteroids[i]);
                        break;
                    }

                    // Get the absolute value of current asteroid
                    int modVal = Math.abs(asteroids[i]);

                    // Both asteroids have the same size,
                    // so both are destroyed.
                    if (modVal == top) {
                        stack.pop();
                        break;

                    // Top asteroid is bigger,
                    // so the current asteroid is destroyed.
                    } else if (modVal < top) {
                        break;

                    // Current asteroid is bigger,
                    // so the top asteroid is destroyed.
                    } else {
                        stack.pop();

                        // If no asteroid is left,
                        // current asteroid survives.
                        if (stack.isEmpty()) {
                            stack.push(asteroids[i]);
                            break;
                        }
                    }
                }
            }
        }

        // Create the result array
        int len = stack.size();
        int[] ansArray = new int[len];

        // Copy stack elements into the result array
        for (int i = len - 1; i >= 0; i--) {
            ansArray[i] = stack.pop();
        }

        return ansArray;
    }
}