//Given an array, remove all of the odd occurences of them and replace them with the odd values in order from least to greatest

function sortArray(array) {
  //Create an array to hold the odds only, after they were sorted from least to greatest
  let filterEd = array.filter(el => el%2 != 0).sort((a,b)=>a-b);
  //Iterate through the original array and upon an occurence of an odd int, replace it with the first value in th filterEd array.
  for(let i = 0; i < array.length; i++){
    if(array[i]%2 == 1){
      array[i] = filterEd.shift()
    }
  }
  //Return the new array
  return array;
}
