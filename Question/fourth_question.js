// Function to reverse the array in-place
function reverseString(s) {

    let left = 0;                // start pointer
    let right = s.length - 1;   // end pointer

    // continue until pointers meet
    while (left < right) {

        // swap characters
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;

        // move pointers toward center
        left++;
        right--;
    }

}

/* 
input :- let s = ["h","e","l","l","o"];
output :- ["o","l","l","e","h"]
*/