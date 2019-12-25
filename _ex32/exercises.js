// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Divison should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

// function zero() {}
// function one() {}
// function two() {}
// function three() {}
// function four(callback) {
//     var x = 4;
//     if (callback) {
//         return x;
//     } else {

//     }
// }
// function five() {}
// function six() {}
// function seven() {}
// // function eight() {}
// function nine() {
//     var x = 9;

// }

// function plus(num1, num2) {
//     num1
//     num2
//     return num1 + num2;
// }
// function minus() {}
// function times() {}
// function dividedBy() {}
// let u = four(plus())

// seven(times(five())); // must return 35
// let e = four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3


var n = function (digit) {
    return function (op) {
        return op ? op(digit) : digit;
    }
};
var zero = n(0);
var one = n(1);
var two = n(2);
var three = n(3);
var four = n(4);
var five = n(5);
var six = n(6);
var seven = n(7);
var eight = n(8);
var nine = n(9);

function plus(r) {
    return function (l) {
        return l + r;
    };
}

function minus(r) {
    return function (l) {
        return l - r;
    };
}

function times(r) {
    return function (l) {
        return l * r;
    };
}

function dividedBy(r) {
    return function (l) {
        return l / r;
    };
}


seven(times(five())); // must return 35
let e = four(plus(nine())); // must return 13

eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3