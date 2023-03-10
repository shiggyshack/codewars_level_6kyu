//Create a function that takes a string containing five race times written as 'H|M|S H|M|S...' and return a string with the Range, Median, and Average of the data as a string statement.
function stat(strg) {
  //Split each time into an array of three values and convert to a raw number of seconds.
  let times = strg.split(", ").map(time => {
    let [h, m, s] = time.split("|").map(Number);
    return h * 3600 + m * 60 + s;
  });
  //Longest minus smallest, and then sent to the formatTime function.
  let range = formatTime(Math.max(...times) - Math.min(...times));
  
  //Finds the sum of all times and then the average by dividing by the number of times, pad using formatTime function.
  let sum = times.reduce((acc, curr) => acc + curr, 0);
  let average = formatTime(Math.floor(sum / times.length));

  //Finds the median of the times by sorting the times, applying a technique if there is an even number of times, and pad using formatTime function.  
  times.sort((a, b) => a - b);
  let median;
  if (times.length % 2 === 0) {
    median = formatTime(
      Math.floor((times[times.length / 2 - 1] + times[times.length / 2]) / 2)
    );
  } else {
    median = formatTime(times[Math.floor(times.length / 2)]);
  }
  //Return the string statment with all three calculations returned
  return `Range: ${range} Average: ${average} Median: ${median}`;
}

//Converts the time as seconds only into a H, M, S value with '0' padding any number that is smaller than 2 digits.
function formatTime(time) {
  let h = Math.floor(time / 3600);
  let m = Math.floor((time % 3600) / 60);
  let s = time % 60;
  return `${String(h).padStart(2, "0")}|${String(m).padStart(2, "0")}|${String(
    s
  ).padStart(2, "0")}`;
}
