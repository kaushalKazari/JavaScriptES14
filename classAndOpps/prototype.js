let name = 'kaushal';
let myName = 'kaushal          ';
console.log(name.length)
console.log(myName.trueLength)

let myHeros = ['thor', 'spiderman']
let heroPower = {
    thor:'hammer',
    spiderman:'sling',
    getSpiderPower:function(){
        console.log(`spider power is ${this.getSpiderPower}`)
    }
}
Object.prototype.kaushal = function(){
    console.log(`kaushal method is present in all objects`);
}
Array.prototype.heyKaushal = function(){
    console.log(`Kaushal says hello`);
}
// heroPower.kaushal();
myHeros.kaushal();
myHeros.heyKaushal();

// inheritance
const User = {
    username:'chai',
    email:'chai@google.com'
}
const Teacher = {
    makeVideo:true
}
const TeachingSupport ={
    isAvilable:false
}
const TASupport ={
    makeAssignment:'JS assignment',
    fullTime:true,
    __proto__:TeachingSupport
}
// prototype
Teacher.__proto__ = User

// modern syntax inheritance prototype
Object.setPrototypeOf(TeachingSupport, Teacher)
console.log(TeachingSupport.makeVideo)

//
let anotherUserName = 'KaushalCodes         ';
String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True length is ${this.trim().length}`)
}
anotherUserName.trueLength()
'kaushal'.trueLength()
'kazari'.trueLength()
