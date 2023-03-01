//Provided an array of bits, create a function that will section them into bytes, and then reverse the order of the bytes, and return the array of separate bits.
function dataReverse(data) {
  //This will hold the new version of the bits
  let bitsArray = [];
  //While you still have data stored in the data array
  while(data.length>0){
    //Push 8 bits (byte) at a time to the bitsArray
    let str = ''
    for(let i = 0; i < 8 ; i++){
      str += data.shift();
    }
    bitsArray.push(str);
  }
  //Reverse the bits array, join all bytes, split into bits, and then Map each element to a number from a string.
  return bitsArray.reverse().join('').split('').map(num=>Number(num));
}
