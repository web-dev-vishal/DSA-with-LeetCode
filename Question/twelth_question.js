function checkInclusion(s1, s2) {

    // sort s1 once
    let sortedS1 = s1.split('').sort().join('');

    // check every substring of same length
    for (let i = 0; i <= s2.length - s1.length; i++) {

        let sub = s2.substring(i, i + s1.length);

        // sort substring and compare
        if (sub.split('').sort().join('') === sortedS1) {
            return true;
        }
    }

    return false;
}

/*
 1.input :- let s1 = "ab";  // small string
            let s2 = "eidbaooo";  // big string
output :- false 
 2. input :- let v1 = "adc";
             let v2 = "dcda"
output : - true
*/