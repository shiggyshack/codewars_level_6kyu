//Create a function that takes in an integer and performs operations on each individual place value based off of modulus 13 until a two digit number is returned at which the algorithm will keep returning the same two number over and over.
function thirt(n) {
  //Create an array that represents the integer reversed and each element is cast to a string
  let nNew = String(n).split('').reverse();
  //As long as the array is longer than two elements repeat the process inside of the while loop
  while(nNew.length > 2){
    //Create a variable to hold the sum of the individual elements in the algorithm represented as a for loop (mod 6)
    let sumOf = 0;
    for(let i=0; i < nNew.length; i++){
      if((i+1)%6==1){
        sumOf += 1*(+nNew[i]);
      }
      else if((i+1)%6==2){
        sumOf += 10*(+nNew[i]);
      }
      else if((i+1)%6==3){
        sumOf += 9*(+nNew[i]);
      }
      else if((i+1)%6==4){
        sumOf += 12*(+nNew[i]);
      }
      else if((i+1)%6==5){
        sumOf += 3*(+nNew[i]);
      }
      else{
        sumOf += 4*(+nNew[i]);
      }
    }
    //Update the nNew variable using the sumOf variable cast to a string, split, and reversed
    nNew = String(sumOf).split('').reverse();
  }
  //After exiting the for loop and the while loop, return the array after reversing and casting to an integer (which will now contain 2 - digits)
  return +nNew.reverse().join('');
}
