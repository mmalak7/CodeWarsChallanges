// Write a function:

// function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].

function solution(A) {
    let B = [...new Set(A)];
    let C = B.filter(value => value >= 0);
    if (B.some(v => v > 0)) {
        n = B.length + 1;
        result = n * (n + 1) / 2;
        let sum = [...B].reduce((a, b) => a + b);
        return result - sum;
    } else {
        return 1;
    }
}

function solution2(A) {
    let B = [...new Set(A)].filter(val => val >= 0);

    if (B.length > 0) {
        n = B.length + 1;
        result = n * (n + 1) / 2;
        let sum = [...B].reduce((a, b) => a + b);
        return result - sum;

    } else {
        return 1;
    }

}
solution2([1, 3, 6, 4, 1, 2]);
solution2([1, 3, 4]);
solution2([-1, -3]);