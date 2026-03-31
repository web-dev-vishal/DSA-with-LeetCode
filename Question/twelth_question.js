function checkInclusion(s1, s2) {

    // Sort s1 once — our target signature to match against
    let sortedS1 = s1.split('').sort().join('');

    // Slide a window of size s1.length across s2
    for (let i = 0; i <= s2.length - s1.length; i++) {

        let sub = s2.substring(i, i + s1.length);

        // If sorted window matches sorted s1 → permutation found
        if (sub.split('').sort().join('') === sortedS1) {
            return true;
        }
    }

    return false;
}

/*
 1. input :- let s1 = "ab";
             let s2 = "eidbaooo";
    output :- true

 2. input :- let s1 = "adc";
             let s2 = "dcda";
    output :- true
*/