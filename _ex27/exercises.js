function solution(S) {
    // if (S.match(/^[0-1]+$/) != null) {
    let num = parseInt(S, 2);
    let counter = 0;


    while (num > 0) {
        if (num % 2 == 0) {
            num = num / 2;
            counter++
        } else if (num % 2 != 0) {
            num = num - 1;
            counter++
        }
    }
    console.log(counter);
    // }
}

solution('011100');
solution('000000');
solution('01010111');
solution('0101011');
solution('0100010111010111');


// function solution(N) {
//     let arr = [0];

//     const getRandomInt = (min, max) => {
//         min = Math.ceil(min);
//         max = Math.floor(max);
//         return Math.floor(Math.random() * (max - min)) + min;
//     }

//     const separate = (n) => {
//         let low = Math.max(-100, n - 100);
//         let high = Math.min(100, n + 100);
//         let r = getRandomInt(low, high);

//         return [r, n - r]
//     }

//     for (let i = 0; i < N - 1; i++) {
//         let idx = ~~(Math.random() * arr.length); //cuts all fractional digits
//         let num = separate(arr[idx]);
//         arr[idx] = num[0];
//         arr.push(num[1]);
//     }
//     return arr
// }


// solution(10);