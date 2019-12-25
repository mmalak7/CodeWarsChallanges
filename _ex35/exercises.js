// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// Find the unique number (this kata)
// Find the unique string
// Find The Unique


// function findUniq(arr) {
//     let out = [];
//     let j = 1;
//     for (let i = 0; i <= arr.length; i++) {
//         if (arr[i] !== arr[j]) {
//             if (arr[i + 1] === arr[j + 1]) {
//                 out.push(arr[i]);
//             } else {
//                 out.push(arr[j]);
//             }
//         } else {
//             j++
//         }
//     }
//     out
//     return parseFloat(out.join(''));
// }


function findUniq(arr) {
    arr.sort((a, b) => a - b);
    arr
    return arr[0] == arr[1] ? arr.pop() : arr[0]
}


findUniq([1, 1, 1, 2, 1, 1])
findUniq([0, 1, 1])
// findUniq([0, 0, 0.55, 0, 0])