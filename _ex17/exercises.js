// A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

// For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.

// Write a function:

// function solution(N);

// that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

// For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..2,147,483,647].

function solution(N) {
    if (Number.isInteger(N)) {
        var binary = N.toString(2);
        console.log([...binary]);
        var length = binary.length; //length of binary string

        var ones = []; //empty table
        for (var i = 0; i < length; i++) {
            if (binary[i] == '1') ones.push(i); //jesli binary[1] to wtedy ones.push[i]
        }

        console.log('onces: ', ones);

        var zeros = binary.split('1');

        console.log('zeros: ', zeros);

        var returnVar = 0;

        for (var i = 1; i < ones.length; i++) {
            if (zeros[i] && returnVar < zeros[i].length) returnVar = zeros[i].length;
        }

        console.log(returnVar);
    }
}

function solution2(N) {
    if (Number.isInteger(N)) {
        let bin = N.toString(2);
        let ones = [];
        let zeros = [];
        let output = 0;

        [...bin].map((val, idx) => {
            if (bin[val] == '0')
                ones.push(idx);
        });

        zeros = bin.split('1');
        let last = [...zeros].pop();
        if (last != 1) {
            for (var i = 1; i < ones.length; i++) {
                if (zeros[i] && output < zeros[i].length) output = zeros[i].length;
            }
        }

        console.log(output);
    }
}

solution2(51712);
solution2(1041);
// solution2(32);