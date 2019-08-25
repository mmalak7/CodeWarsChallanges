/*Welcome. In this kata, you are asked to square every digit of a number.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer */

//Longer version with use of standard for loop formula

function squareDigits(num){
    if(Number.isInteger(num)){
        let numbers = ('' + num).split('')
        let out = []
        for(let i = 0; i<numbers.length; i++){
            out.push(numbers[i]*numbers[i])
        }
        console.log(parseInt(out.join('')))
    }else{
        console.log('Please introduce a digit!')
    }
}
squareDigits(9119)

//Let's try to check shorter version! :D

function squareDigitsArrow(num){
    if (Number.isInteger(num)){
        let numbers = ('' + num).split('')
        let output = numbers.map(x => x*x)
        console.log(parseInt(output.join('')))
    }
}

squareDigitsArrow(9119)