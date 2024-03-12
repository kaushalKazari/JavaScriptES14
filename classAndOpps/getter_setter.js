class USer{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    get password(){
        // return this._password.toUpperCase()
        return `${this._password}kaushal`
    }
    set password(value){
        this._password = value
    }
}

const kaushal = new USer("k@gmail.com", 'abc');
console.log(kaushal.email)
console.log(kaushal.password)