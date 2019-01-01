function traverseMatrix() {
    console.log("traverseMatrix")
  var z = 1; 
  var x = 1; 
  var y = 1;
  var i = 0;
  var j = 0;
  while(z<=4) {

    for(i=1,j=y;i<=x,j>=1;i++,j--) {
      console.log(i + ' ' + j);
    }
    x++;y++;

  }
    
}

traverseMatrix();