// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.


function humanReadable(seconds) {
    let output = [];
    let a = seconds / 3600;
    let b = (seconds % 3600) / 60;
    let c = (seconds % 3600) % 60;
    if (a >= 10) {
        output.push(Math.floor(a));
    } else if (a > 0 && a < 10) {
        output.push('0' + Math.floor(a));
    } else if (a <= 0) {
        output.push('00')
    }
    if (b >= 10) {
        output.push(Math.floor(b));
    } else if (b > 0 && b < 10) {
        output.push('0' + Math.floor(b));
    } else if (b <= 0) {
        output.push('00');
    }
    if (c >= 10) {
        output.push(Math.floor(c));
    } else if (c > 0 && c < 10) {
        output.push('0' + Math.floor(c));
    } else if (c <= 0) {
        output.push('00');
    }
    let fin = output.join(':');
    fin
    return output.join(':');
}

// humanReadable(0)
// humanReadable(5)
// humanReadable(60)
humanReadable(86399)
// humanReadable(359999)