/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
   let valley = prices[0]
   let maxProfit = 0
   
   for(let i=0;i<prices.length;i++) {   
       if(prices[i] < valley) {
           valley = prices[i]
       } else if (prices[i] - valley > maxProfit) {
           maxProfit = prices[i] - valley
       }
   }
    console.log(maxProfit)
    return maxProfit
};
maxProfit([7,1,5,3,6,4])