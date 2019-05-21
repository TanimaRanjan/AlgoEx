/**  
 * Word that start with a and end with b
 * **/ 
 
function abCount(str) {
  var pattern = /a...b/;
  ///both these work 
  console.log(str)
  console.log(str.match(pattern));

  console.log(str.search(pattern));
}


abCount("abcbabcb")
abCount('acccb');