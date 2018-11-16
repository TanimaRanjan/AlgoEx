function maxStockProfit(priceArr) {
  // Takes in array of prices as parameter
  // Returns the max possible profit of the day
  console.log("Get the manimum profite of the day")
  console.log(priceArr);
  var maxProfit = -1;
  var buyPrice = 0;
  var sellPrice = 0;
  var changePrice = true;
  for(var i=0;i< priceArr.length;i++) {
    if(changePrice) buyPrice = priceArr[i];
    sellPrice = priceArr[i+1];
    if(sellPrice < buyPrice) {
      changePrice = true;
    } else {
      var tempProfit = sellPrice - buyPrice;
      if(tempProfit > maxProfit) maxProfit = tempProfit;
      changePrice = false; 
    }
  }
  return maxProfit;
}

maxStockProfit([32,46,26,38,40,48,42]);