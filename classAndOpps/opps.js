// Ex. 1
const oop = {
    username:'Hitesh',
    loginCount:8,
    signedIn:true,
    getUserDetails:function(){
        // console.log('Got user details from database')
    }
}
// console.log(oop.username)
// console.log(oop.getUserDetails())

// Ex. 2
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this;
}

const userOne = new User('Kaushal Kishor', 12, true)
const userTwo = new User('Javascript Codes', 11, true)
console.log(userOne)
console.log(userTwo)