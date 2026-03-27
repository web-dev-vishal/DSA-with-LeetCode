# JavaScript DSA Practice

A collection of classic Data Structures & Algorithms problems solved in JavaScript.
Covers: Two Pointers | Sliding Window | Binary Search | Prefix Sum | Expand from Center | Linked List

---

## Folder Structure

```
DSA Question from LeetCode/
|
+-- Question/
|   +-- first_question.js         ->  Two Sum II                    (Two Pointers - detailed)
|   +-- first_question_easy.js    ->  Two Sum II                    (Two Pointers - simplified)
|   +-- second_question.js        ->  3Sum                          (Sort + Two Pointers)
|   +-- third_question.js         ->  Valid Palindrome II           (Two Pointers)
|   +-- fourth_question.js        ->  Reverse String                (Two Pointers - in-place)
|   +-- fifth_question.js         ->  K Distinct Subarrays          (Sliding Window)
|   +-- sixth_question.js         ->  Search in Rotated Array       (Binary Search)
|   +-- seventh_question.js       ->  Palindromic Substrings        (Expand from Center)
|   +-- eight_question.js         ->  Odd Even Linked List          (Linked List)
|   +-- ninth_question.js          ->  Find First & Last Position    (Binary Search - detailed)
|   +-- ninth_question_easy.js    ->  Find First & Last Position    (Binary Search - simplified)
|   +-- tenth_question.js         ->  Subarray Sum Equals K         (Prefix Sum + HashMap)
|
+-- README.md
```

---

## Quick Reference Table

| #  | Problem                        | File                       | Technique            | Time     | Space |
|----|--------------------------------|----------------------------|----------------------|----------|-------|
| 1  | Two Sum II                     | first_question.js          | Two Pointers         | O(n)     | O(1)  |
| 1b | Two Sum II (simplified)        | first_question_easy.js     | Two Pointers         | O(n)     | O(1)  |
| 2  | 3Sum                           | second_question.js         | Sort + Two Pointers  | O(n^2)   | O(1)  |
| 3  | Valid Palindrome II             | third_question.js          | Two Pointers         | O(n)     | O(1)  |
| 4  | Reverse String                 | fourth_question.js         | Two Pointers         | O(n)     | O(1)  |
| 5  | K Distinct Subarrays           | fifth_question.js          | Sliding Window       | O(n)     | O(k)  |
| 6  | Search in Rotated Array        | sixth_question.js          | Binary Search        | O(log n) | O(1)  |
| 7  | Palindromic Substrings         | seventh_question.js        | Expand from Center   | O(n^2)   | O(1)  |
| 8  | Odd Even Linked List           | eight_question.js          | Linked List          | O(n)     | O(1)  |
| 9  | Find First & Last Position     | ninth_question.js          | Binary Search x2     | O(log n) | O(1)  |
| 9b | Find First & Last (simplified) | ninth_question_easy.js     | Binary Search x2     | O(log n) | O(1)  |
| 10 | Subarray Sum Equals K          | tenth_question.js          | Prefix Sum + HashMap | O(n)     | O(n)  |

---

## Problems — Detailed Breakdown

---

### 1. Two Sum II — Sorted Array
Files: Question/first_question.js  |  Question/first_question_easy.js
Technique: Two Pointers

Given a sorted array, find two numbers that add up to target. Return their 1-based indices.

Example:
```
Input:  numbers = [2, 7, 11, 15],  target = 9
Output: [1, 2]   ->  numbers[0] + numbers[1] = 2 + 7 = 9
```

Visual — Pointer Movement:
```
 [  2,   7,  11,  15 ]
  L                R
  2 + 15 = 17  > 9  ->  move R left

 [  2,   7,  11,  15 ]
  L        R
  2 + 11 = 13  > 9  ->  move R left

 [  2,   7,  11,  15 ]
  L   R
  2 + 7  =  9 == 9  ->  return [1, 2]
```

Logic:
- sum < target  ->  move left right  (need a bigger number)
- sum > target  ->  move right left  (need a smaller number)
- sum == target ->  return 1-based indices

Note: first_question_easy.js is the same logic written more concisely, good for quick revision.

---

### 2. 3Sum
File: Question/second_question.js
Technique: Sort + Two Pointers

Find all unique triplets in the array that sum to zero. No duplicate triplets in output.

Example:
```
Input:  nums = [-1, 0, 1, 2, -1, -4]
Output: [[-1, -1, 2], [-1, 0, 1]]
```

Visual — After Sorting:
```
Sorted: [ -4, -1, -1,  0,  1,  2 ]

Fix i=1, nums[i] = -1
Remaining: [ -1,  0,  1,  2 ]
             L              R

  -1 + (-1) + 2 = 0  ->  push [-1, -1, 2], skip duplicates
  -1 +  0   + 1 = 0  ->  push [-1,  0, 1], skip duplicates
```

Logic:
1. Sort the array
2. Fix one element at index i
3. Use two pointers on the rest to find pairs summing to -nums[i]
4. Skip duplicates at both i level and pointer level

---

### 3. Valid Palindrome II
File: Question/third_question.js
Technique: Two Pointers + Helper Function

Check if a string can become a palindrome by removing at most one character.

Example:
```
Input:  "deeee"
Output: true   (remove 'd' -> "eeee" is a palindrome)
```

Visual:
```
  d  e  e  e  e
  L           R

'd' != 'e'  ->  mismatch found!

Option A: skip L  ->  check "eeee"  ->  palindrome  ->  return true
Option B: skip R  ->  check "deee"  ->  not palindrome
```

Logic:
- Walk inward with two pointers
- On first mismatch, try skipping left char OR right char
- If either resulting substring is a palindrome -> return true
- If no mismatch at all -> already a palindrome -> return true

---

### 4. Reverse String
File: Question/fourth_question.js
Technique: Two Pointers (in-place swap)

Reverse a character array in-place without using extra space.

Examples:
```
Input:  ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Input:  ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
```

Visual:
```
Step 1:  [ h, e, l, l, o ]    swap h <-> o
          L           R

Step 2:  [ o, e, l, l, h ]    swap e <-> l
             L     R

Step 3:  [ o, l, l, e, h ]    L crosses R -> stop

Result:  [ o, l, l, e, h ]
```

Logic:
- Swap s[left] and s[right] using a temp variable
- Move both pointers toward center
- Stop when they meet or cross

---

### 5. Subarrays with K Distinct Integers
File: Question/fifth_question.js
Technique: Sliding Window with Frequency Map

Count subarrays that contain exactly K distinct integers.

Example:
```
Input:  nums = [1, 2, 1, 2, 3],  k = 2
Output: 7

Valid subarrays:
  [1,2]  [2,1]  [1,2]  [2,3]  [1,2,1]  [2,1,2]  [1,2,1,2]
```

Key Formula:
```
exactly(k) = atMost(k) - atMost(k-1)
```

Visual — atMost(k=2) sliding window:
```
nums = [ 1, 2, 1, 2, 3 ]

right=0: window=[1]           distinct=1 <= 2  ->  count += 1  (total=1)
right=1: window=[1,2]         distinct=2 <= 2  ->  count += 2  (total=3)
right=2: window=[1,2,1]       distinct=2 <= 2  ->  count += 3  (total=6)
right=3: window=[1,2,1,2]     distinct=2 <= 2  ->  count += 4  (total=10)
right=4: window=[1,2,1,2,3]   distinct=3 > 2   ->  shrink left
         window=[2,1,2,3]     distinct=3 > 2   ->  shrink left
         window=[1,2,3]       distinct=3 > 2   ->  shrink left
         window=[2,3]         distinct=2 <= 2  ->  count += 2  (total=12)

atMost(2) = 12
atMost(1) = 5
exactly(2) = 12 - 5 = 7
```

Logic:
- atMost(k) counts subarrays with at most k distinct numbers using a sliding window
- Shrink window from left when distinct count exceeds k
- Subtract atMost(k-1) to get exactly k

---

### 6. Search in Rotated Sorted Array
File: Question/sixth_question.js
Technique: Binary Search

Search for a target in a sorted array that was rotated at an unknown pivot.
Returns the index of target, or -1 if not found.

Example:
```
Input:  nums = [4, 5, 6, 7, 0, 1, 2],  target = 0
Output: 4   (nums[4] = 0)
```

Visual:
```
[ 4, 5, 6, 7, 0, 1, 2 ]
  L        M           R

nums[L]=4 <= nums[M]=7  ->  left half [4,5,6,7] is sorted
target=0 NOT in [4..7)  ->  search right half

[ 4, 5, 6, 7, 0, 1, 2 ]
                 L  M  R

nums[L]=0 <= nums[M]=1  ->  left half [0,1] is sorted
target=0 in [0..1)      ->  search left half

nums[M] = 0 == target   ->  return index 4
```

Logic:
- At every step, one half is always sorted
- Identify which half is sorted
- Check if target falls in that sorted half
- Narrow search to the correct half

---

### 7. Count Palindromic Substrings
File: Question/seventh_question.js
Technique: Expand from Center

Count all substrings of s that are palindromes.

Examples:
```
Input:  "aaa"  ->  Output: 6
  Palindromes: "a" x3, "aa" x2, "aaa" x1  =  6

Input:  "abc"  ->  Output: 3
  Palindromes: "a", "b", "c"  =  3
```

Visual — Expanding from center for "aaa":
```
Index 0 (center 'a'):
  odd  expand: "a"    -> count=1
  even expand: "aa"   -> count=2

Index 1 (center 'a'):
  odd  expand: "a"    -> count=3
               "aaa"  -> count=4
  even expand: "aa"   -> count=5

Index 2 (center 'a'):
  odd  expand: "a"    -> count=6
  even expand: out of bounds

Total: 6
```

Logic:
- For each index, expand outward for odd-length (single center) palindromes
- Also expand for even-length (two centers) palindromes
- Count every valid expansion

---

### 8. Odd Even Linked List
File: Question/eight_question.js
Technique: Linked List Pointer Manipulation

Reorder a linked list so all odd-indexed nodes come first, then all even-indexed nodes.
Index is 1-based (position in list, not node value).

Example:
```
Input:  [1, 2, 3, 4, 5]
Output: [1, 3, 5, 2, 4]
```

Visual:
```
Original:
  1  ->  2  ->  3  ->  4  ->  5  ->  null
  odd    even

Step 1: odd.next = 3,    odd  moves to 3
        even.next = 4,   even moves to 4
  1  ->  3  ->  ...      2  ->  4  ->  ...

Step 2: odd.next = 5,    odd  moves to 5
        even.next = null, even moves to null
  1  ->  3  ->  5        2  ->  4  ->  null

Step 3: attach even list after odd list
  1  ->  3  ->  5  ->  2  ->  4  ->  null
```

Logic:
- Save the head of the even list (evenHead)
- Weave odd and even nodes into two separate chains
- Connect odd tail to evenHead at the end

---

### 9. Find First and Last Position of Element in Sorted Array
Files: Question/ninth_question.js  |  Question/ninth_question_easy.js
Technique: Binary Search (run twice)

Given a sorted array, find the starting and ending index of a target value.
Return [-1, -1] if target is not found.

Examples:
```
Input:  nums = [1, 2, 2, 2, 3, 4, 5],  target = 2
Output: [1, 3]   ->  first at index 1, last at index 3

Input:  nums = [5, 7, 7, 8, 8, 10],  target = 8
Output: [3, 4]   ->  first at index 3, last at index 4
```

Visual — Finding first occurrence of 2 in [1, 2, 2, 2, 3, 4, 5]:
```
[ 1, 2, 2, 2, 3, 4, 5 ]
  L        M           R

nums[M]=2 == target  ->  store result=3, move R left to find earlier

[ 1, 2, 2, 2, 3, 4, 5 ]
  L  M  R

nums[M]=2 == target  ->  store result=1, move R left to find earlier

[ 1, 2, 2, 2, 3, 4, 5 ]
  L
  R

nums[M]=1 < target   ->  move L right

L > R  ->  stop.  First occurrence = 1
```

Visual — Finding last occurrence of 2 in [1, 2, 2, 2, 3, 4, 5]:
```
[ 1, 2, 2, 2, 3, 4, 5 ]
  L        M           R

nums[M]=2 == target  ->  store result=3, move L right to find later

[ 1, 2, 2, 2, 3, 4, 5 ]
               L  M  R

nums[M]=4 > target   ->  move R left

[ 1, 2, 2, 2, 3, 4, 5 ]
               L
               R

nums[M]=3 > target   ->  move R left

L > R  ->  stop.  Last occurrence = 3
```

Logic (ninth_question.js — two separate functions):
- findFirst: standard binary search, but when target found, store index and keep searching LEFT
- findLast:  standard binary search, but when target found, store index and keep searching RIGHT

Logic (ninth_question_easy.js — single reusable function):
- binarySearch(nums, target, findFirst) handles both cases with a boolean flag
- findFirst=true  -> on match, move right left  (search earlier)
- findFirst=false -> on match, move left right  (search later)

---

### 10. Subarray Sum Equals K
File: Question/tenth_question.js
Technique: Prefix Sum + HashMap

Count the total number of subarrays whose elements sum to exactly k.

Example:
```
Input:  nums = [1, 1, 1],  k = 2
Output: 2

Valid subarrays:
  [1,1] at index 0-1
  [1,1] at index 1-2
```

Key Idea — Prefix Sum:
```
prefixSum[i] = sum of all elements from index 0 to i

If prefixSum[j] - prefixSum[i] = k
Then subarray from index i+1 to j has sum = k
So we need: prefixSum[i] = prefixSum[j] - k
```

Visual — Step by step trace for [1,1,1], k=2:
```
map = {0:1}   (base case: empty subarray has sum 0)
sum = 0, count = 0

i=0: sum = 0+1 = 1
     sum-k = 1-2 = -1  ->  not in map, skip
     map = {0:1, 1:1}

i=1: sum = 1+1 = 2
     sum-k = 2-2 = 0   ->  in map with count 1  ->  count += 1  (count=1)
     map = {0:1, 1:1, 2:1}

i=2: sum = 2+1 = 3
     sum-k = 3-2 = 1   ->  in map with count 1  ->  count += 1  (count=2)
     map = {0:1, 1:1, 2:1, 3:1}

Output: 2
```

Logic:
- Keep a running prefix sum as we iterate
- At each index, check if (sum - k) exists in the map
- If yes, it means there are subarrays ending here that sum to k
- Store each prefix sum and its frequency in the map
- Base case: map starts with {0:1} to handle subarrays starting from index 0

---

## Techniques Explained

### Two Pointers
Use two index variables moving toward each other (or in the same direction) to avoid nested loops.
- Best for: sorted arrays, palindrome checks, in-place swaps
- Reduces O(n^2) brute force down to O(n)

### Sliding Window
Maintain a dynamic window [left, right] that expands and shrinks based on a condition.
- Best for: subarray or substring problems with a constraint (sum, distinct count, etc.)
- Uses a Map or Set to track window contents efficiently

### Binary Search
Repeatedly halve the search space by comparing with the midpoint.
- Best for: sorted or partially sorted arrays
- O(log n) time complexity
- Can be extended to find first/last occurrence by continuing search after a match

### Prefix Sum + HashMap
Compute a running sum and store it in a map to find subarrays with a target sum in O(1) lookup.
- Best for: subarray sum problems where elements can be negative or zero
- Key insight: if prefixSum[j] - prefixSum[i] = k, then subarray i+1..j sums to k
- O(n) time, O(n) space

### Expand from Center
For palindrome problems, treat each character (or gap between characters) as a potential center and expand outward.
- Handles both odd-length and even-length palindromes
- O(n^2) time but simple and clean

### Linked List Pointer Manipulation
Rewire next pointers directly without allocating extra space.
- Best for: reordering, reversing, or partitioning linked lists
- O(1) space complexity

---

## Double-Check Notes

| #  | Verified Detail                                                                          |
|----|------------------------------------------------------------------------------------------|
| Q1 | Output [1,2] is 1-based. numbers[0]+numbers[1] = 2+7 = 9. Correct.                     |
| Q2 | Duplicate skipping works at both i level and pointer level. Correct.                    |
| Q3 | "deeee" -> remove 'd' -> "eeee" is palindrome -> true. Correct.                         |
| Q4 | Modifies array in-place, no return value (matches LeetCode style). Correct.             |
| Q5 | atMost(2)=12, atMost(1)=5, exactly(2)=7. Verified manually. Correct.                   |
| Q6 | nums[4]=0 for input [4,5,6,7,0,1,2], target=0 -> output 4. Correct.                    |
| Q7 | "aaa" -> 6 palindromes: a,a,a,aa,aa,aaa. Verified by expansion. Correct.               |
| Q8 | eight_question.js is now inside Question/ folder. Input/output verified. Correct.       |
| Q9 | [1,2,2,2,3,4,5] target=2 -> [1,3]. [5,7,7,8,8,10] target=8 -> [3,4]. Correct.         |
| Q10| [1,1,1] k=2 -> 2. Traced manually: subarrays [1,1](0-1) and [1,1](1-2). Correct.     |

---

## How to Run

No dependencies needed. Just Node.js installed on your machine.

```bash
node Question/first_question.js
node Question/first_question_easy.js
node Question/second_question.js
node Question/third_question.js
node Question/fourth_question.js
node Question/fifth_question.js
node Question/sixth_question.js
node Question/seventh_question.js
node Question/eight_question.js
node Question/ninth_question.js
node Question/ninth_question_easy.js
node Question/tenth_question.js
```

To test with custom input, add a console.log call at the bottom of any file:

```js
// first_question.js
console.log(twoSum([2, 7, 11, 15], 9));          // [1, 2]

// second_question.js
console.log(threeSum([-1, 0, 1, 2, -1, -4]));    // [[-1,-1,2],[-1,0,1]]

// sixth_question.js
console.log(search([4, 5, 6, 7, 0, 1, 2], 0));   // 4

// ninth_question.js
console.log(searchRange([1, 2, 2, 2, 3, 4, 5], 2));  // [1, 3]
console.log(searchRange([5, 7, 7, 8, 8, 10], 8));     // [3, 4]
console.log(searchRange([1, 2, 3], 5));                // [-1, -1]

// tenth_question.js
console.log(subarraySum([1, 1, 1], 2));   // 2
console.log(subarraySum([1, 2, 3], 3));   // 2  ([3] and [1,2])
```
