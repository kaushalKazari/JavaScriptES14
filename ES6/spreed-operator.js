// function decleration
function fun1(x,y,z){ 
    console.log(x+y+z);
}
const numbers = [5,6,2,9,8]
fun1(...numbers) // spread operator

function fun11(x,y,z){
console.log(x+y+z)
}
const numbers11 = [5,6,2,9,8];
console.log(fun11(...numbers11))
// function decleration
function sum(...theArgs){
    let total = 0;
    for(const arg of theArgs){
        total += arg;
    }
    return total;
}
console.log(sum(1,2,3,4,5,6,7,8,9))

function sumTest(...theArgs){
    let total = 0;
    for(const arg of theArgs){
        total += arg;
    }
    return total;
}

console.log('sumTest --> ', sumTest(1,2,3,4,5,6,7,8,9))


function sum2(...theArgs){
    let total = 0;
    for(const arg of theArgs){
        total += arg;
    }
    return total;
}
console.log('sum2 --> ', sum2(1,2,3,5,2))

// Ex.-2
function sum2(...theArgs){
    let total = 0;
    for(const arg of theArgs){
        total += arg;
    }
    return total;
}
console.log('sum2 --> ', sum2(25,6,8,9,10,11,12,13,14,15,16))