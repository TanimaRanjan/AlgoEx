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


function isPalindrome2(n) {
	let temp = n
	let rev = 0
	while(temp>0) {
		rev = rev*10 + temp%10
		temp = Math.floor(temp/10)
	}
	return rev === n
}


console.log(isPalindrome2(838))
console.log(isPalindrome2(77))
console.log(isPalindrome2(95159))
console.log(isPalindrome2(839))
console.log(isPalindrome2(4234))
console.log(isPalindrome2(13))
