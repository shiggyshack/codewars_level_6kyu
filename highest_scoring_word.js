function high(x){
  const words = x.split(" "); // Split the input string into an array of words
  let highestScore = 0; // Initialize the highest score to 0
  let highestScoringWord = ""; // Initialize the highest scoring word to an empty string

  // Loop through each word in the words array
  words.forEach(word => {
    let score = 0; // Initialize the score of the current word to 0

    // Loop through each character in the current word
    for (let i = 0; i < word.length; i++) {
      // Calculate the score of the current character using its position in the alphabet
      score += word.charCodeAt(i) - 96;
    }

    // If the score of the current word is higher than the current highest score,
    // update the highest score and highest scoring word
    if (score > highestScore) {
      highestScore = score;
      highestScoringWord = word;
    }
  });

  return highestScoringWord;
}
