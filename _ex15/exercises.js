//Function Description

// Complete the countApplesAndOranges function in the editor below. It should print the number of apples and oranges that land on Sam's house, each on a separate line.

// countApplesAndOranges has the following parameter(s):

// s: integer, starting point of Sam's house location.
// t: integer, ending location of Sam's house location.
// a: integer, location of the Apple tree.
// b: integer, location of the Orange tree.
// apples: integer array, distances at which each apple falls from the tree.
// oranges: integer array, distances at which each orange falls from the tree.
// Input Format

// The first line contains two space-separated integers denoting the respective values of s and y.
// The second line contains two space-separated integers denoting the respective values of a and b.
// The third line contains two space-separated integers denoting the respective values of m and n.
// The fourth line contains m space-separated integers denoting the respective distances that each apple falls from point a.
// The fifth line contains n space-separated integers denoting the respective distances that each orange falls from point b.


function countApplesAndOranges(s, t, a, b, apples, oranges) {

    const _apples = [...apples].reduce((sum, d) => sum + (s - a <= d && d <= t - a), 0);
    const _oranges = [...oranges].reduce((sum, d) => sum + (s - b <= d && d <= t - b), 0);

    return [_apples, '\n', _oranges];
}

data = [7, 11, 5, 15, 3, 2, -2, 2, 1, 5, -6]

countApplesAndOranges(data)