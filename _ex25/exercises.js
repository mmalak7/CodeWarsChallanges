// function addWordOntoLine(line, word) {
//     if (line.length != 0) {
//         line += " ";
//     }
//     return (line += word);
// }

// function solution(S, K) {
//     var i;
//     var output = [];
//     var lineWord = "";
//     var temp;
//     var words = S.split(' ');
//     for (i = 0; i < words.length;) {

//         temp = addWordOntoLine(lineWord, words[i]);
//         if (temp.length > K) {
//             if (lineWord.length == 0) {
//                 lineWord = temp;
//                 i++;
//             }
//             output.push(lineWord);
//             lineWord = "";
//         } else {
//             lineWord = temp;
//             i++;
//         }
//     }
//     if (lineWord.length > 0) {
//         output.push(lineWord);
//     }

//     return output.length;
// }

// let message = "SMS message are really short"
// solution(message, 12);


// function solution(M, A) {
//     var N = A.length;
//     var count = new Array(M);
//     var i;
//     for (i = 0; i <= M - 1; i++)
//         count[i] = 0;
//     var maxOccurence = 1;
//     var index = 0;
//     for (i = 1; i < N; i++) {
//         if (count[A[i]] >= 0) {
//             var tmp = count[A[i]];
//             if (tmp >= maxOccurence) {
//                 maxOccurence = tmp;
//                 index = i;
//             }
//             count[A[i]] = tmp + 1;
//         } else {
//             count[A[i]] = 1
//         }
//     }
//     let test = A[index];
//     test
//     return A[index];
// }

// solution(3, [1, 3, 3, 3, 2, 1, 1, 2, 2])
// solution(2, [0,1])
// solution(5, [1, 1, 1, 2, 3, 3, 1, 3, 1, 3, 3, 3, 3, 2, 2, 2, 2, ])
// solution(6, [0, 0, 0, 2, 3, 3, 0, 3, 0, 3, 3, 3, 3, 2, 2, 2, 2, 0, 0, 0])

function solution(A) {
    let hill = 0;
    let valley = 0;
    let finalOutput = 0;

    for (let i = 0; i <= A.length - 1; i++) {
        if(A[i])
    }

    valley
    hill
}

solution([2, 2, 3, 4, 3, 3, 2, 2, 1, 1, 2, 5]);
// solution([0, 1]);