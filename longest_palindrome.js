//Create a function, that accepts a string as a parameter, and returns the length of the longest palindrome contained within the original string.
var longestPalindrome=function(s){
  //If s is not a string or length of 0, return 0.
  if (!s) return 0;
  //Working from the end of string c all the way to the front.
  for (let c = s.length; c > 0; c--) {
    //Starting from the begining and continuing forward up to length minus the current value of c.
    for (let i = 0; i <= s.length - c; i++) {
      //Check to see if the substring is equal to the .split('').reverse().join() result, if so return the value of c.
      var check = s.substr(i, c);
      if (check === check.split("").reverse().join("")) return c;
    }
  }
}
