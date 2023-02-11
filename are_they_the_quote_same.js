//Create a function to test if two arrays are the "same", meaning they have the same number of elements and the second array is comprised of the first array's elements squared.
function comp(array1, array2){
  //First, make sure that both arrays exists; otherwise, return false
  if(array1 == null || array2 == null){
    return false;
  }
  //Use the sort function to adjust array1 and array2 to be in order from least to greatest
  array1.sort((a,b)=>a-b);
  array2.sort((a,b)=>a-b);
  //Combine a map function with a 'every' function to see if squaring each element of array1 yields the same value found in array2
  return array1.map(el=>el*el).every((v,i)=>v==array2[i]);
}
