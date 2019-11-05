function gradingStudents(grades) {

    output = [];

    const round5 = (val) => {
        return Math.ceil(val / 5) * 5;
    }

    [...grades].forEach(element => {
        (round5(element) - element < 3 && element > 35) ? output.push(round5(element)): output.push(element);
    });
    console.log(output);
}

grades = [4, 73, 67, 38, 33];
grades2 = [44, , 84, 94, 21, 0, 18, 100, 18, 62, 30, 61, 53, 0, 43, 2, 29, 53, 61, 40, 14, 4, 29, 98, 37, 23, 46, 9, 79, 62, 20, 38, 51, 99, 59, 47, 4, 86, 61, 68, 17, 45, 6, 1, 95, 95]
gradingStudents(grades);
gradingStudents(grades2);

//checking the rules of values to round up to round5