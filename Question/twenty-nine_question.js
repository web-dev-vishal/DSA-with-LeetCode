// 125 question on leetcode
var isPalindrome = function(s) {

    // Helper: check if character is a letter or digit
    function isAlphanumeric(c) {
        return /[a-z0-9]/.test(c);
    }

    // Convert to lowercase once upfront
    s = s.toLowerCase();

    let left = 0;
    let right = s.length - 1;

    while (left < right) {

        // Skip non-alphanumeric from the left
        while (left < right && !isAlphanumeric(s[left])) left++;

        // Skip non-alphanumeric from the right
        while (left < right && !isAlphanumeric(s[right])) right--;

        // Compare the two valid characters
        if (s[left] !== s[right]) return false;

        // Move both pointers inward
        left++;
        right--;
    }

    // All characters matched → it's a palindrome
    return true;
};