function getMiddle(str) {
	let mid = str.length/2 
	if(str.length%2 === 0) {
		return str.substr(mid-1,2)
	} else {
		return str.substr(Math.floor(mid),1)
	}
}


function getMiddle(str) {
  var start = Math.ceil(str.length / 2) - 1;
  var end = Math.floor(str.length / 2) + 1;
  return str.substring(start, end);
}

var getMiddle = str => {
  const mid  = (str.length / 2)
  const even = !(str.length % 2)
   
  return even ? str.substring(mid - 1, mid + 1) : str.charAt(mid)
}


function getMiddle(str) {
	var isOdd = str.length % 2 === 1,
 		middle = Math.floor(str.length / 2);
  
  return isOdd ? str[middle] : str.substr(middle - 1, 2);
}