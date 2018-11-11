
function abCount(str) {
  var pattern = /a...b/;
  ///both these work 
  console.log(str.match(pattern));
  console.log(str.search(pattern));
}

