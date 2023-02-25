//Build helper functions for the built in class of Array without overwriting the original array that is passed in.

//Function square will take in an array as a parameter and return a new array where all elements have been squared.
Array.prototype.square = function() 
  {
    return this.map(function(num) {
      return Math.pow(num, 2)
     })
  }


//Function cube will take in an array as a parameter and return a new array where all elements have been cubed.
Array.prototype.cube = function() 
  {
    return this.map(function(num) {
      return Math.pow(num, 3)
    })
  }

//Function average will take in an array as a parameter, as long as it isn't NaN, and return the average of all the elements as a number.
Array.prototype.average = function() 
{
    if(this.length === 0) 
    {
      return NaN
    } else {
        var sum = this.reduce(function(total, num) {
          return total + num
        })
    return sum / this.length
    }
}

//Function sum will take in an array as a parameter and return the sum of all of the elements
Array.prototype.sum = function() 
{
  return this.reduce(function(total, num) {
    return total + num
  })
}

//Function even will take an array as a parameter and return a new array with only the even elements still remaining from the parameter.
Array.prototype.even = function() 
{
  return this.filter(function(num) {
    return num % 2 === 0
  })
}

//Function odd will take an array as a parameter and return a new array with only the odd elements still remaining from the parameter.
Array.prototype.odd = function() 
{
  return this.filter(function(num) {
    return num % 2 !== 0
  })
}
