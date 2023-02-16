//Read description attached...essential how many times will someone see a bouncing ball as it bounces less and less each iteration
function bouncingBall(h,  bounce,  window) {
  //These conditions must be true for the event to begin
  if(h > 0 && bounce > 0 && bounce < 1 && window < h){
    //This count must happen as the first drop takes place
    let count = 1;
    //This loops runs while the height of the ball is greater than the window, meaning it will pass by two more times
    while(bounce*h > window){
      count += 2;
      //Update the height of the bounce using the decimal value for bounce
      h = h*bounce;
    }
    //Return the count variable after the ball doesn't reach above the window anymore
    return count;
  }
  //Return -1 if the event never happened
  return -1;
}
