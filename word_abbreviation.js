//Create a function that takes in a string as a parameter and will abbreviate any words longer than 3 characters using the first and last letter of the individual word with the character count in between. For example, 'abbreviation' would become a12n

function abbreviate(string) {
  //Using a regular expression inside of a replace method, call the function that takes a word of 4 or more characters and slices the index 0 + length + final character together to update the word as the appreviation.
  return string.replace(/\w{4,}/g, function(word) {
    var len = word.length - 2;
    return word[0] + len + word.slice(-1);
  });
}
