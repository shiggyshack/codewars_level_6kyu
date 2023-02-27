//Create a function that given four parameters will determine how long someone will need to save money in order to buy a newer car. The four parameters are: starting price of their current car, starting price of the desired car, how much they can save a month, and how much interests both cars will lose each month.
function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
  //Initialize a time variable
  let time = 0;
  //Calculate the difference of the cars' values before saving starts
  let moneyRemaining = startPriceNew - startPriceOld;
  //As long as the difference is positive, meaning you don't have enough money, repeat the loop.
  while(moneyRemaining > 0){
    //increment the time variable, one month has passed
    time++
    //update the price of the new and old vehicle based off of the percentLossByMonth variable
    startPriceNew = startPriceNew*(1-percentLossByMonth/100);
    startPriceOld = startPriceOld*(1-percentLossByMonth/100);
    //determine if you have enough money to purchase the new car given you have saved some money
    moneyRemaining = startPriceNew - startPriceOld - savingperMonth*time
  }
  //once we exit the while loop, return the time it took for the money remaining to be less than or equal to 0 and return the moneyRemaining, rounded, and negated.
  return [time, -1*Math.round(moneyRemaining)];
}
