class Person{
    static #count = 0
    static getCount(){
        return this.#count
    }
    constructor(){
       return this.constructor.incrementCount()
    }
    static incrementCount(){
        return this.#count = this.#count + 2
    }
}
const person1 = new Person()
console.log(Person.getCount())