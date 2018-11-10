function reverseWord(str) {
  strStmt = str.split(' '); 
  str2='';

 for(var i=0;i<strStmt.length;i++) {
   var strRev = strStmt[i].split('');
  // console.log(strRev);
   for(var j=strRev.length-1;j>=0;j--){
    str2 += strRev[j];
   }
   str2 += ' ';
  
 }
 console.log(str2);
  var wordArr = str.split(' ');
  var revWordArr = [];

    
  wordArr.forEach(word => {
    var revWord = '';
    for(var i=word.length-1; i>=0; i--){
      revWord += word[i];
    }
    revWordArr.push(revWord);
  });
  console.log(revWordArr.join(' '));


}
