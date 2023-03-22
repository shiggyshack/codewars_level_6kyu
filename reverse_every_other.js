//Create a function, that accepts a sentence as a string, and will reverse every other word and return a new string.
function reverse(str){
  //Split each word into an array of elements
  str = str.split(' ');
  //This new array will hold the words in order and the words reversed
  let nStr = [];
  //Iterate through the array performing the action described dependent upon the index being even or odd.
  for(let i = 0; i < str.length; i++){
    //Odd indices will be reversed and added to the new array
    if(i % 2 === 1){
      nStr.push(str[i].split('').reverse().join(''))
    }
    //Even indices will be added without changing the letters' order
    else{
      nStr.push(str[i])
    }
  }
  //Return the new array formed after the for loop is complete and use .trim() to remove any leading/trailing whitespaces
  return nStr.join(' ').trim()
}

