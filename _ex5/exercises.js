/* Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b.

array_diff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

array_diff([1,2,2,2,3],[2]) == [1,3] */

//That is kind of impressive, that filter works that easy with filtering arrays!

function array_diff(a, b) {
  // console.log(a)
  // console.log(b)
  console.log(output = a.filter(e => !b.includes(e)))
}

array_diff([-16,-20,-19,6,-7,6,-6,16,10,7,-10,12,10],[-6,7,10,10,16,-16,-10])
array_diff([1,2,2,2,3],[2])

// Below other solution using "set" object. Not my solution, it is included just to remember that
// there is also other solution which looks easy.

function array_diff_other(a, b) {
  b = new Set(b)
  return a.filter(v => !b.has(v))
}