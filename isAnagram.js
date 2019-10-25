/*
Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false

*/

const isAnagram = (t, s) => {

    let t1 = t.split('').sort()
    let s1 = s.split('').sort()
    return t1.join('') == s1.join('')
}

console.log(isAnagram("anagram", "naagram"))

console.log(isAnagram("rat", "cat"))