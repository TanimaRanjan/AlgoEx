/* 
Given two strings, find the number of common characters between them.
Example
    For s1 = "aabcc" and s2 = "adcaa", the output should be commonCharacterCount(s1, s2) = 3.
    Strings have 3 common characters - 2 "a"s and 1 "c".
*/

const commonCharCount = (str1, str2) => {

    let array1 = str1.split('')
    let array2 = str2.split('')
    
    let hash1 = getCharCount(array1)
    let hash2 = getCharCount(array2)
    let result = []

    for(ele in hash1) {
        if(hash2[ele]) {
            result[ele] = hash1[ele] <= hash2[ele] ? hash1[ele] : hash2[ele]
        } 
    }
    return result
}

const getCharCount = (array) => {
    let hash = []
    array.forEach(ele => {   
        if(!hash[ele])  hash[ele] = 0
            hash[ele]++
    })
    return hash
}

console.log(commonCharCount('aabcchjkhj', 'adcaahj'))