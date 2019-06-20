
const countVowel = (str) => {
  var count =0;
  var pattern = /[aeiou]/i;

  for (var i=0; i<str.length;i++) {
   
    if(str[i].match(pattern)) {
      count++;
    }
  }
  console.log(count);

}


const countVowel2 = (str) => {
  var count =0;
  var checker = "aeiou" //  Or use ['a','e','i','o','u']

  for (let char of str.toLowerCase()) {
    if(checker.includes(char)) {
      count++
    }
  }
  console.log(count);
}


const countVowel3 = (str) => {
  // returns null if no match is found
  const matches = str.match(/[aeiou]/gi)
  return matches ? matches.length : 0

}

console.log(countVowel3('Why do you ask?'))
