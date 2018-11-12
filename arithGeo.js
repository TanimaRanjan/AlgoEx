/**  Arith Geo                                                                            *
*  Using the JavaScript language, have the function ArithGeo(arr) take the array of    *
*  numbers stored in arr and return the string "Arithmetic" if the sequence follows    *
*  an arithmetic pattern or return "Geometric" if it follows a geometric pattern. If   *
*  the sequence doesn't follow either pattern return -1. An arithmetic sequence is     *
*  one where the difference between each of the numbers is consistent, where as in a   *
*  geometric sequence, each term after the first is multiplied by some constant or     *
*  common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric                        *
*  example: [2, 6, 18, 54]. Negative numbers may be entered as parameters, 0 will not  *
*  be entered, and no array will contain all the same elements.  
*/

function arithGeo(arr) {
  var arith = [];
  var geo = [];
  var arithLog = false;
  var geoLog = false;
  var diff = arr[1] - arr[0];
  var ratio = arr[1] / arr[0];
  
  for (var i=1; i<arr.length-1;i++) {
    arith[i] = (arr[i+1]-arr[i]);
    console.log(diff + ' ' + arith[i]);
    if(diff === arith[i]) {
      arithLog = true;
    } else {
      arithLog = false;
    }
  }
  for (var i=1; i<arr.length-1;i++) {
    geo[i] = (arr[i+1]/arr[i]);
    console.log(ratio + ' ' + geo[i]);
    if(ratio === geo[i]) {
      geoLog = true;
    } else {
      geoLog = false;
    }
  }
  if(arithLog) {
    console.log("Arith");
  } else if(geoLog) {
    console.log("Geo");
  } else {
    console.log(false);
  }

}

arithGeo([2, 4, 6, 8]);
arithGeo([2, 6, 18, 54]);
arithGeo([5,10,15]); // Arithmetic
arithGeo([2,4,16,24]); // -1

