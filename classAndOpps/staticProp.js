class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`)
    }
    // createId(){
    //     return '123'
    // }
    static createId(){
        return '123'
    }
}
const kaushal = new User('kaushal')
// console.log(kaushal.createId())

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher('iphone', 'i@gmail.com')
// iphone.logMe()
console.log(iphone.createId())
