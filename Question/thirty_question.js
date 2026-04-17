// 5 question on leetcode

var longestPalindrome = function(s) {

    let start = 0;  // start index of longest palindrome
    let maxLen = 1; // length of longest palindrome

    // Helper: expand from center and update longest if found
    function expand(left, right) {

        // Keep expanding while characters match and within bounds
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }

        // When loop ends, left & right are one step OUT of the palindrome
        // So actual length = right - left - 1
        const len = right - left - 1;

        // Update our best answer if this palindrome is longer
        if (len > maxLen) {
            maxLen = len;
            start = left + 1; // left overshot by 1, so +1
        }
    }

    for (let i = 0; i < s.length; i++) {
        expand(i, i);     // odd length  → single center
        expand(i, i + 1); // even length → double center
    }

    // Return the longest palindromic substring
    return s.slice(start, start + maxLen);
};