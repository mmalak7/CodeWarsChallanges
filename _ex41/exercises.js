// Write a function with the signature shown below:

// function isIntArray(arr) {
//   return true
// }
// returns true / True if every element in an array is an integer or a float with no decimals.
// returns true / True if array is empty.
// returns false / False for every other input.

function isIntArray(arr) {
  let output = [];
  if (!Array.isArray(arr) || arr.some(el => el === '') || arr.some(el => typeof el === 'string')) {
    output.push(false)
  } else if (arr != null && arr.length < 1) {
    output.push(true);
  } else if (arr.some(el => el === null)) {
    output.push(false);
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 1 !== 0) {
        output.push(false);
      } else if (arr[i] % 1 === 0) {
        output.push(true);
      } else if (arr[i] < 0) {
        output.push(false);
      }
    }
  }
  output
  if (output.includes(false)) {
    return false;
  } else {
    return true;
  }
}

isIntArray([]);
// isIntArray([1, 2, 3, 4])
// isIntArray([1, 2, 3, NaN])
isIntArray([''])
isIntArray(['-1'])
isIntArray([-1])
isIntArray('')