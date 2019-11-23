/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    
   // s.trim()
   console.log(s.trim()+'*')
   s = s.trim()
    return s.split(" ")[s.split(" ").length-1].length
};


console.log(lengthOfLastWord("a "))