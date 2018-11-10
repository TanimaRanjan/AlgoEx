function isPalindrome(str) {
  str = str.toLowerCase();
  var strArr = str.split('');
  var validChar = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var letterArr = [];
   strArr.forEach(char => {
   if(validChar.indexOf(char) > -1) letterArr.push(char);
 }); 

 console.log(letterArr);
 console.log(letterArr.join(''));

 if(letterArr.join('') === letterArr.reverse().join('')) 
  return true;

  return false; 
}
