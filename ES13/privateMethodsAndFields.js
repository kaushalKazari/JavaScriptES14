// NEW ECMAScript 2022
class Person1{
    #firstName='kaushal'
    #lastName='kishor'
    get name(){
        return `NEW ECMAScript 2022 ${this.#firstName} and ${this.#lastName}`
    }
}
const person1 = new Person1()
console.log(person1.name)

// ECMAScript 2021
class Person2{
    _firstName='kaushal'
    _lastName='kishor'
}
const person2 = new Person2()
console.log('ECMAScript 2021 ', person2._firstName)