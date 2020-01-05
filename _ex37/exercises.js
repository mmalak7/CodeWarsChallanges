// The main idea is to count all the occuring characters(UTF-8) in string. If you have string like this aba then the result should be { 'a': 2, 'b': 1 }

// What if the string is empty ? Then the result should be empty object literal { }

// For C#: Use a Dictionary<char, int> for this kata!


function count(string) {
    let a;
    if (string.length === 0) {
        a = {}
    }
    a = [...string].reduce((prev, curr) => {
        if (prev[curr]) {
            prev[curr] += 1;
        } else {
            prev[curr] = 1;
        }
        return prev
    }, {})
    return a;
}


count("aba");
count("");