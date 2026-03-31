function checkInclusion(s1, s2) {

    if (s1.length > s2.length) return false;

    // Count letters in s1 and first window of s2
    let count1 = new Array(26).fill(0);
    let count2 = new Array(26).fill(0);

    for (let i = 0; i < s1.length; i++) {
        count1[s1.charCodeAt(i) - 97]++;
        count2[s2.charCodeAt(i) - 97]++;
    }

    // Slide window — add right char, remove left char
    for (let i = s1.length; i < s2.length; i++) {

        // Arrays equal = permutation found
        if (count1.join('') === count2.join('')) return true;

        count2[s2.charCodeAt(i) - 97]++;               // add new char
        count2[s2.charCodeAt(i - s1.length) - 97]--;   // remove old char
    }

    // Check last window
    return count1.join('') === count2.join('');
}

/*
 1. input :- s1 = "ab";
             s2 = "eidbaooo"
    output :- true

 2. input :- s1 = "adc";
             s2 = "dcda"
    output :- true
*/