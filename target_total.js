//Create a function that takes an array and a target value and determines if the target sum can be made using values found in the array. Return the indices that would yeild this sum.
function twoSum(numbers, target) {
  //Iterate from the 0 position up until the last position
  for(let i = 0 ; i < numbers.length-1; i++){
    //Iterate past the i position up until the last element
    for(let j = i+1; j < numbers.length; j++){
      //If any combination of elements hits the target
      if(numbers[i]+numbers[j]===target){
        //Return the index of the elements as a duple
        return [i, j];
      }
    }
  }
}
