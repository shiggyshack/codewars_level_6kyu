
function duplicateCount(text){
  // Convert the input string to lowercase to make the search case-insensitive
  const inputLowerCase = text.toLowerCase();

  // Initialize a set to track the characters that have already been counted
  const countedChars = new Set();

  // Initialize a set to track the characters that have occurred more than once
  const duplicateChars = new Set();

  // Loop through each character in the input string
  for (let i = 0; i < inputLowerCase.length; i++) {
    const char = inputLowerCase[i];

    // If we haven't already counted this character, check if it occurs more than once in the string
    if (!countedChars.has(char)) {
      countedChars.add(char);
      if (inputLowerCase.lastIndexOf(char) !== i) {
        duplicateChars.add(char);
      }
    }
  }

  // Return the size of the set of duplicate characters
  return duplicateChars.size;
}
