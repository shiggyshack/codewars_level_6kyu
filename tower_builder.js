//Create a function that will take in an integer value and create a trianglular tower with n rows and 2n - 1 '*' in the final row, starting with one '*' in the top row.

function towerBuilder(nFloors) {
  //Variable to hold our strings which represent the lines of the triangular tower
  let arrOfString = []
  //Outside for loop used to build each floor as an individual string
  for(let i = 1; i <= nFloors; i++){
    let string = ''
    //Inside for loop used to determine if a ' ' or a '*' should be placed based off of distance from the center character and row in which you are working
    for(let j = 1; j <= 2*nFloors-1; j++){
      //If you are within this tolerance, place a '*'
      if(Math.abs(j-nFloors) < i){
         string += '*';
      }
      //Otherwise a ' ' space is entered
      else{
        string += ' ';
      }
    }
    //Update your array with that string line
    arrOfString.push(string);
  }
  //Return the array holding the strings or rows of the triangular tower
  return arrOfString;
