//Create a function that updates an array starting with the last element, +1, and stops if the element doesn't change from 9 to 0. If all 9's, update all 9's to 0's and add a leading element of 1.
function upArray(arr) {
    //Returns a value of "null" if any of these three conditions are met.
    if ((typeof arr === 'undefined') || (arr === null) || (arr.length === 0)) {
        return null;
    }
    //Returns a value of "null" if any element is negative, larger than 1 digits, or not an integer.
    for (var i = 0; i < arr.length; i++) {
        if ((arr[i] < 0) || (typeof arr[i] !== 'number') || (arr[i] > 9)) {
            return null;
        }
    }
    //Using a for loop, starting at the last index, continue to update the elements +1 if they are nine, if not nine, break.
    for (var j = arr.length - 1; j > -1; j--) {

        if (arr[j] !== 9) {
            arr[j] = arr[j] + 1;
            break;
        } else {
            arr[j] = 0;
        }
        //If you make it all the way to the updating the first element to a 0, then you must add a 1 to the front of the array
        if (j === 0) {
            arr.unshift(1);
        }
    }
    //return the updated array
    return arr;
}
