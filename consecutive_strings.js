//Create a function, when given an array of strings and an integer k, that will return the first occurence of the longest joined string formed from taking consecutive strings and concatenating them
function longestConsec(strarr, k) {
    //This will hold our longest str found until we find one to overwrite it
    let longestr = ''
    //This makes sure that our conditions are such that we should even begin the search
    if(strarr.length === 0 || k > strarr.length || k <= 0 ){
      return "";
    }
    //This will enter into our search if all of the condition are such that one will exists
    else{
      //This for loop will make sure that we don't go out of the bounds of our original array considering the value of k
      for(let i = 0; i <= strarr.length - k ; i++){
       //This will hold a temporary concatenated string that will be compared to the longest string 
        let temp = ''
        //Adds consecutive strings to each other given the integer value of k
        for(let j = i; j < i+k; j++){
         temp += strarr[j];
       }
        //Checks if the temp is actually longer than the longestr and will overwrite longestr if temp is strictly greater
        if(temp.length > longestr.length){
          longestr = temp;
        }
      }
      //Return the first occurence of the longest string combination after all are completed.
      return longestr; 
    }
}
