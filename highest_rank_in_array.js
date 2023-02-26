//Create a function that accepts an array as a parameter and returns the most occuring number in the array. If two or more repeat in frequency, take the largest value of those.

function highestRank(arr){
  //Create an array to hold the value(s) that repeat the most in the original array arr
  let freq = {};
  //Set the original counter to equal 0
  let max_count = 0;
  //Assume the first element in the arr parameter is the largest value, until proven otherwise
  let max_num = arr[0];
  //Using a for loop, iterate through every element of the array to get a count of its frequency
  for (let i = 0; i < arr.length; i++) {
    //Set num variable equal to the value of the element in the ith position
    let num = arr[i];
    //If that value appears in the created freq array, update the array to contain another occurence of the value
    if (freq[num]) {
      freq[num]++;
    }
    //Else set the frequence equal to 1
    else {
      freq[num] = 1;
    }
    //Use this to check the OR conditional regarding the if the value is in fact the most occuring or if it is the largest of the most occuring
    if (freq[num] > max_count || (freq[num] === max_count && num > max_num)) {
      max_count = freq[num];
      max_num = num;
    }
  }
  //Return the final value of the max_num after all the for loop has completed
  return max_num;
}
