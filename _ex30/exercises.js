// Given an array, find the integer that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.


function findOdd(array) {
    let output = 0;
    let occurrences = [...array].reduce((prev, curr) => {
        if (typeof prev[curr] == 'undefined') {
            prev[curr] = 1;
        } else {
            prev[curr] += 1;
        }
        return prev;
    }, {})

    for (let key in occurrences) {
        if (occurrences[key] % 2 != 0) {
            output = key;
        }
    }
    return parseInt(output);

    // let output = array.reduce((a, b) => a ^ b); THE SHORTEST VERSION EVER SEEN O_o o_O o_o O_O :O 
    
}

findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]);
findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]);
findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]);
findOdd([10]);
findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]);
findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]);