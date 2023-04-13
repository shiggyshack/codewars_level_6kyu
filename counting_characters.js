function count(string) {
  // Initialize an empty object to store the character counts
  const charCounts = {};

  // Loop through each character in the input string
  for (let char of string) {
    // Skip whitespace characters
    if (char !== ' ') {
      // If the character is not already a key in the charCounts object, add it with a count of 1
      // Otherwise, increment the count by 1
      charCounts[char] = (charCounts[char] || 0) + 1;
    }
  }

  // Return the charCounts object
  return charCounts;

}
