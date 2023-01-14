//Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, the cube above will have the volume (n-1)^3 and so on until the top which will have a volume of 1^3. You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

function findNb(m) {
    //Create a variable to represent the smallest cube on top of the building
    let n = 1
    //Create a variable to represent the number of remaining total volume
    let remaining = m
    //As long as the volume exists, continue to subtract of cubes of smaller volume, if possible
    while(remaining > -1){
      remaining = remaining - n**3
      //return 0 if no more volume exists
      if(remaining == 0){
        return n
      }
      //increment the size of the next cubes dimension
      n++
    }
    //return -1 if the volume remaining isn't enough to make a cube of increased dimension
    return (-1)
}
