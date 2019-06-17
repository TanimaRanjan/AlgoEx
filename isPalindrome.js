function isPalindrome(str) {
  var strArr = str.toLowerCase().split('');
  var validChar = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var letterArr = [];
   strArr.forEach(char => {
   if(validChar.indexOf(char) > -1) letterArr.push(char);
 }); 

 return letterArr.join('') === letterArr.reverse().join('')
}

console.log(isPalindrome('AaBaa'))
console.log(isPalindrome('Abac'))

console.log(isPalindrome('Aa .,8757Baa'))