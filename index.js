function hasTargetSum(array, target) {
  // look through each item in the array and assign variable num1
  for ( let i = 0; i < array.length; i ++) {
    let num1 = array[i]
    //look through the rest of the array and assign variable num2
    for ( let j = i +1; j < array.length; j++ ) {
      let num2 = array[j]
    // add each number in the array
    if (num1 + num2 === target) {
      return true
    }
    }
  }
return false

}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  iterate over the array starting with the start and adding the second, then thrid and so on.
  if num1 + num2 = target number
  return true 
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 8, 30, 4, 4, 6, 10], 32));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
