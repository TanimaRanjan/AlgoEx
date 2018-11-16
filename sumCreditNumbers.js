function sumCreditNumbers(creditCardN) {
var large=0;
var longCC = '';
  for(var i=0;i<creditCardN.length;i++) {
    var creditCard = creditCardN[i];
    console.log(creditCard);
    var total = 0;
    
    var simpleCCArr = creditCard.split('-');
    //console.log(simpleCCArr);
    for(var j =0;j<simpleCCArr.length;j++) {
        var intCC = parseInt(simpleCCArr[j]);
        total += intCC;
    }
    console.log(large + ' ' + total+ ' '+ creditCard+ ' ' + longCC);

    if(large < total) {
      large=total;
      longCC = creditCard;
    }
    
  //console.log(large + ' ' + longCC+  ' ' + total + ' ' + creditCard );

  }
console.log(large + ' ' + longCC);
}


var credits = ['4916-2600-1804-0530', '4779-252888-3972', '4252-2-7978', '4556-4242-9283-2260'];
sumCreditNumbers(credits);