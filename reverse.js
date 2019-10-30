function reverse(str) {
		if(str.length ===0) 
			return ''
		return str[str.length-1] + reverse(str.substr(0,str.length-1))
}


function reverse(str) {
	return str == "" ? "" : reverse(str.substr(1)) + str.charAt(0)
}

function reverse(str) {
  if (!str) return str;
  return str.slice(-1) + reverse(str.slice(0, -1));
}