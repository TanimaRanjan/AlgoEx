function simpleSymbols(str) {
  pattern = /[a-z]/i;

  for(var i=0;i<str.length;i++) {
    if(str[i].match(pattern)) {
      if(str[i-1] === '+' && str[i+1] === '+') {
        console.log("Found it " + str[i]);
      }  else { 
        console.log("It wont work :(");
      }
    }
  }



