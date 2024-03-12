class Students{
    constructor(name, age, cls){
        this.myname = name;
        this.myage = age;
        this.mycls = cls;
    }
    biodata(){
        console.log(`Name: ${this.myname}, Age: ${this.myage}, Class: ${this.mycls}`)
    }
}
class Player extends Students{
    constructor(name, age, cls, game){
        super(name, age, cls);
        this.mygame = game;
    }
    // biodata(){
    //     // super.biodata()
    //     console.log(`Name: ${this.myname}, Age: ${this.myage}, Class: ${this.mycls}, Game: ${this.mygame}`)
    // }
    play_biodata(){
        console.log(`${super.biodata()}. I am player of ${this.mygame}`)
    }
}
// const obj1 = new Students('kaushal', 37, 'B.sc')
// const obj2 = new Students('Yash Raj', 7, 'K.G')
const obj1 = new Player('kaushal', 37, 'B.sc', 'Football')
// const obj2 = new Player('Yash Raj', 7, 'K.G', 'game2')
obj1.play_biodata()
// obj2.biodata()

