function comp(array1, array2) {
    let arr = [];
    if (array1 == null || array2 == null) {
        arr.push(false);
    } else {
        array2.forEach(element => {
            let val = Math.sqrt(element);
            if (array1.includes(val)) {
                arr.push(true);
            } else {
                arr.push(false);
            }
        });
    }
    return arr.includes(false) ? false : true;
}

let a = [121, 144, 19, 161, 19, 144, 19, 11]
let b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a, b)