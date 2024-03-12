const user = {
    username:'kaushal',
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to our website`)
        // console.log(this)
    }
}
// user.welcomeMessage()
// user.username='sam'
// user.welcomeMessage()

// console.log(this)

function chai(){
    console.log(this)
}
chai()