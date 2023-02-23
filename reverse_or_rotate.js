function revrot(str, sz) {
  //If the size parameter is non-positive, the string is null, or the size parameter is larger than the length of the string, return ''
    if (sz <= 0 || !str || sz > str.length) return '';    
    
  //Otherwise, three functions will be needed: sumCubes, reverse, and rotate
    //sumCubes passes in a string, splits it into an array, the finds the sum of each digit cubed...using an initial value of 0 for the sum variable.
    const sumCubes = chunk => chunk.split('').reduce((sum, digit) => sum += digit**3, 0);
    //reverse passes in a string, splits it into an array, reverses the order, and the joins it back without any spaces back into a string.
    const reverse = chunk => chunk.split('').reverse().join('');
    //rotate passes in a string, concatenates a new string with the end at the beginning, and the first element on the end of the string.
    const rotate = chunk => chunk.slice(1) + chunk.slice(0, 1);
    
    //Declares a new empty array 
    const chunks = [];
    
    //A for loop will pass through the string at increments of sz
    for (let i = 0; i < str.length; i += sz) {
      //Declares a new variable from the i position to the i + sz
      let chunk = str.slice(i, i + sz);
      
      //Conditional that must check the new chunk is smaller than the sz variable
      if (chunk.length < sz) continue;
      
      //If sumCubes of chunk % 2 is 0, reverse...if 1, rotate
      chunk = sumCubes(chunk) % 2 
        ? rotate(chunk)   
        : reverse(chunk);
      //Push final value of the chunk to the chunks array
      chunks.push(chunk)
    }
    //Return the array after merging all of the chunk variables in the for loop above
    return chunks.join('')
}
