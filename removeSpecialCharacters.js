function removeSpecialCharacters(str) {
	return str.replace(/[!@#$%^&\*()\.\[\]{},\?<>`~|\+=]/g, '')
}


function removeSpecialCharacters(str) {
  return str.replace(/[^\w- ]/gi, "");
}

function removeSpecialCharacters(str) {
  return str.replace(/[^a-zA-Z0-9 \-_]/ig, '');
}