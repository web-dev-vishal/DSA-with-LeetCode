// 150 question on leetcode 

var evalRPN = function(tokens) {

    const stack = [];

    for (const token of tokens) {

        // If token is an operator → pop two numbers and calculate
        if (token === '+' || token === '-' || token === '*' || token === '/') {

            const right = stack.pop(); // second operand (popped first)
            const left = stack.pop();  // first operand (popped second)

            let result;

            if (token === '+') result = left + right;
            if (token === '-') result = left - right;
            if (token === '*') result = left * right;

            // Division truncates toward zero (not Math.floor!)
            if (token === '/') result = Math.trunc(left / right);

            stack.push(result); // push result back for future operations

        } else {
            // Token is a number → convert to integer and push
            stack.push(parseInt(token));
        }
    }

    // Last remaining value in stack is the answer
    return stack[0];
};