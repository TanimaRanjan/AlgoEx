
function countVowel(str) {
  var count =0;
  var pattern = /[aeiou]/i;

  for (var i=0; i<str.length;i++) {
   
    if(str[i].match(pattern)) {
      count++;
    }
  }
  console.log(count);

}



