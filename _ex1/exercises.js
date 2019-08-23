let str = "How can mirrors be real if our eyes aren't real";

let toJadeCaseStandardForLoop = function(str){
    output = str.split(' ')
    for(let i = 0; i <= output.length-1; i++){
        output[i] = output[i].charAt(0).toUpperCase() + output[i].slice(1);
    }
    return output.join(' ')
}

//not sure why this example do not return changed word properly :( 

let toJadeCaseMap = function(str){
    return output = str.split(' ').map(function(x) {
            x.charAt(0).toUpperCase() + x.slice(1);
    })
}

let toJadeCaseArrowFunction = function(str){
    return output = str.split(' ').map(x => x.charAt(0).toUpperCase() + x.slice(1)).join(' ')
}

//First prototype functions changing first latter from string into uppercase!

String.prototype.toJadeCaseArrowFunctionProto = function(){    
    
    let output = this.split(" ").map(x => x.charAt(0).toUpperCase() + x.slice(1)).join(" ")
    return output
}

console.log(toJadeCaseStandardForLoop(str));
console.log(toJadeCaseMap(str));
console.log(toJadeCaseArrowFunction(str))

console.log(str.toJadeCaseArrowFunctionProto())

