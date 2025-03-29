/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

   let buyprice=prices[0]
   let maxprofit=0
   let curprofit=0

   for(let i=0;i<prices.length;i++){
    curprofit=prices[i]-buyprice

    if(curprofit>=maxprofit) maxprofit=curprofit

    if(prices[i]<buyprice) buyprice=prices[i]

   }

   return maxprofit 
};