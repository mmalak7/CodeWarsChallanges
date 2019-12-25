// An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

// Your goal is to find that missing element.

// Write a function:

// function solution(A);

// that, given an array A, returns the value of the missing element.

// For example, given array A such that:

//   A[0] = 2
//   A[1] = 3
//   A[2] = 1
//   A[3] = 5
// the function should return 4, as it is the missing element.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [0..100,000];
// the elements of A are all distinct;
// each element of array A is an integer within the range [1..(N + 1)].

// function solution(A) {
//     n = A.length + 1;
//     result = n * (n + 1) / 2;
//     let sum = A.reduce((a, b) => a + b, 0)

//    return result - sum; 
// }

// solution([2, 3, 1, 5]);


// function solution(A) {
//     let digit = 5;
//     let x = A.toString();
//     let output = [];
//     for (let i = 0; i <= x.length; i++) {
//         if (x < 0) {
//             output = ['-', digit, Math.abs(x)]
//         } else if (x[i] > digit) {
//             output.push(x[i]);
//         } else if (x[i] == 0) {
//             output.push(digit, x[i]);
//         } else if (x.length == 1 || x[i] != 0) {
//             output.push(digit, x[i]);
//         }
//     }
//     let fin = Number(output.join(''));
//     fin
//     return fin;
// }

function solution2(A) {
    let digit = 5;
    let x = A.toString();
    let output = [];

    for (let i = 0; i <= x.length; i++) {
        if (x < 0) {
            output = ['-', digit, Math.abs(x)];
        } else if (x[i] > digit && x.length != 1) {
            output.push(x[i]);
        } else if (x[i] < digit && x.length != 1) {
            output.push(digit, x[i]);
        } else if (x[i] > digit && x.length == 1) {
            output.push(x[i], digit);
        } else if (x[i] < digit && x.length == 1) {
            output.push(digit, x[i]);
        } else if (x[i] < digit && x[i] == 0) {
            output.push(digit, x[i]);
        }
    }

    output;
}

solution2(268);
solution2(670);
solution2(0);
solution2(-999);
solution2(8);
solution2(4);
solution2(-5);
solution2(0);

// function solution(n) {
//     d = new Array(30);
//     l = 0;
//     while (n > 0) {
//         d[l] = n % 2;
//         n = Math.floor(n / 2);
//         l += 1;
//     }
//     for (p = 1; p < 1 + l; ++p) {
//         ok = true;
//         for (i = 0; i < l - p; ++i) {
//             if (d[i] != d[i + p]) {
//                 ok = false;
//                 break;
//             }
//         }
//         if (ok) {
//             return p;
//         }
//     }
//     return -1;
// }

// solution('codilitycodilityco');

// function solution(A, B) {
//     let bin = 0;
//     let result = 0;
//     let fin = 0;
//     let limit = 100000000;

//     if (Number.isInteger(A) && Number.isInteger(B) || 0 < A < limit || 0 < B < limit) {
//         result = A * B;
//         bin = result.toString(2);
//         [...bin].forEach((val) => {
//             if (val == 1) {
//                 fin++;
//             }
//         })
//     }
//     return fin;
// }

// solution(3, 7);


// function solution(S) {
//     let freq = {};
//     let x = [];

//     for (let i = 0; i < S.length; i++) {
//         let char = S[i];
//         if (freq[char]) {
//             freq[char]++;
//         } else {
//             freq[char] = 1;
//         }
//     }

//     Object.keys(freq).forEach(k => {
//         x += freq[k];
//     });
//     let y = Array.from(new Set(x));
//     var k = y.splice(',').map(function (item) {
//         return parseInt(item, 10);
//     });
//     let j = Array.from(String(x), Number);
//     let sum = k.reduce((a, b) => a + b);

//     let result = j.reduce((a, b) => a + b);
//     let output = result - sum;
//     return output;
// }

// solution("geeksforgeeks");
// solution("aaaabbbb");

// function solution(n) {
//     d = new Array(30);
//     l = 0;
//     while (n > 0) {
//         d[l] = n % 2;
//         n = Math.floor(n / 2);
//         l += 1;
//     }
//     for (p = 1; p < l; ++p) {
//         ok = true;
//         for (i = 0; i < l - p; i++) {
//             if (d[i] != d[i + p]) {
//                 ok = false;
//                 break;
//             }
//         }
//         if (ok) {
//             return p;
//         }
//     }
//     return -1;
// }

// solution(955);