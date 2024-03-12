//  Ex.1 - Object Destructuring
const objBio={
    name:'kaushal kishor',
    age:36,
    deg:'B.sc'
}
let name, age, deg
({name, age, deg} = objBio)
// console.log(name, age, deg)

// Ex. 2 Array Destructuring
const myProgLang = ['Js', 'Angular', 'php', 'c', 'python', 'java']

const [js, angular, php, c, python, java] = myProgLang
console.log(angular)