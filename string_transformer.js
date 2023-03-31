//Create a function, which accepts a string as a parameter, and switches cases of each letter and reverses the order of the words in the original string.
function stringTransformer(str) {
  //Create an array of the words and reverse their occurence in the array.
  str = str.split(' ').reverse()
  //Using a for loop, iterate through each element in the array.
  for(let i = 0; i < str.length; i++){
    //Split each element into another array, representing each letter in the individual words.
    let temp = str[i].split('')
    //Using a for loop, check the case of each letter store in the array, and turn it into the other case.
    for (let j = 0; j < temp.length; j++){
      if(temp[j].toUpperCase() === temp[j]){
        temp[j] = temp[j].toLowerCase();
      }
      else{
        temp[j] = temp[j].toUpperCase();
      }
    }
    //Join back the letters to form a word in the original array
    str[i] = temp.join('')
  }
  //Join back all of the words to form a sentence and return.
  return str.join(' ')
}
