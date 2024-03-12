class Car{
    #color;
    hasColor(){
        return #color in this
    }
}
const car = new Car()
console.log(car.hasColor())