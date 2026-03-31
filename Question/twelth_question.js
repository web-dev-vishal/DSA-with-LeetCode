function checkInclusion(s1, s2) {

    // Sort s1 once to create a reference pattern
    // This becomes our "target signature" to match against
    let sortedS1 = s1.split('').sort().join('');

    // Slide a window of size s1.length across s2
    // We check every possible starting position where a substring of length s1 could fit
    for (let i = 0; i <= s2.length - s1.length; i++) {

        // Extract substring of same length as s1 starting at position i
        let sub = s2.substring(i, i + s1.length);

        // Sort the substring and compare with sorted s1
        // If they match, s1 is a permutation of this substring → inclusion found
        if (sub.split('').sort().join('') === sortedS1) {
            return true;
        }
    }

    // No matching permutation found in any window
    return false;
}

/*
 1.input :- let s1 = "ab";  // small string
            let s2 = "eidbaooo";  // big string
output :- true 
 2. input :- let v1 = "adc";
             let v2 = "dcda"
output : - true
*/