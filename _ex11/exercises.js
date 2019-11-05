// function maximumOccurringCharacter(a, b) {

// }

// maximumOccurringCharacter(['hello', '']);


// function commonSubstring(a, b) {
//     const stringMap = {};
//     let answer = '';

//     for (let i = 0; i < a.length; i++) {
//         const aletter = a[i];
//         stringMap[aletter] = true;
//     }

//     for (let i = 0; i < b.length; i++) {
//         const bletter = b[i];
//         if (stringMap[bletter]) {
//             answer += 'YES\n';
//         }
//     }
//     answer += 'NO\n';

//     return answer;
// }

// function processData(input) {
//     var lines = input.split("\n");
//     var n = parseInt(lines[0]);
//     lines = lines.slice(1);
//     for (var i = 0; i < 2 * n; i++) {
//         var str1 = lines[i];
//         var str2 = lines[i + 1];
//         i++;
//         var answer = hasCommonSubstring(str1, str2);
//         if (answer) {
//             console.log("YES");
//         } else {
//             console.log("NO");
//         }
//     }
// }

// const a = ['2', 'hello', 'hi'];
// const b = ['2', 'world', 'bye'];

// console.log(commonSubstring(a, b))
// function countDuplicates(numbers) {
//     let counts = {};
//     let occurences = 0;

//     numbers.forEach(function(x){
//         counts[x] = (counts[x] || 0) + 1;
//     })

//     for (var key in counts) {
//         if (counts.hasOwnProperty(key)) {
//             counts[key] > 1 ? occurences++ : occurences;
//         }
//     }

//     console.log(occurences);
// }

// countDuplicates([1, 2, 3, 4, 4, 5, 6, 7]);

function sockMerchant(n, ar) {
    let output = 0;
    let lett_count = {};

    [...ar].forEach(element => {
        if (lett_count[element] == undefined) {
            lett_count[element] = 0;
        }
        lett_count[element]++;
    });
    Object.keys(lett_count).forEach(n => {
        let __pair = parseInt(lett_count[n] / 2);
        if (__pair >= 1)
            output += __pair;
    })
}

n = 9;
ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

sockMerchant(n, ar);