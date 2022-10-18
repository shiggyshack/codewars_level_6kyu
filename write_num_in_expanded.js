// DESCRIPTION:

// Write Number in Expanded Form

// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
    //Converts to values as a string and then splits them into an array
    let numStr = num.toString().split('')
    //Passing through each string value in the array from left to right
    for(let i = 0 ; i < numStr.length; i++ ){
        if(numStr[i]!=0){
        //Using the length of the array to determing how many string zeros should be added to each element in the array  
        for(let y = (numStr.length-i); y > 1; y--){
           numStr[i] += '0'
        }
       }
    }
    //Taking out any values that were strictly equal to '0' from the array
    numStr = numStr.filter(value => value !== '0')
    //Joining all string values of the array into one statement that represents the expanded form 
    return numStr.join(' + ')
    
  }