// Ex. 1
const arr = ['kaushal', 'yash', 'divyansh', 'kajal']
for(const item of arr){
    // console.log(item)
}

// Ex. 2
const greetings = 'Hello World!';
for(const greet of greetings){
    // console.log(`Each char is ${greet}`)
}

// Ex. 3 Maps
const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('Fr', 'France')
map.set('IN', 'India')
// console.log(map)

for(const [key, value] of map){
    // console.log(key)
}

const myObj = {
    js:'Javascript',
    cpp:'C++',
    rb:'Ruby',
    swift:'Swift By Apple'
}
// for in work for object
for(const key in myObj){
    // console.log(`${key} :- ${myObj[key]}`)
}
const programing = ['js','cpp','rb','swift']
for(const key in programing){
    console.log(`${key} - ${programing[key]}`)
}