class Vehicle{
    static defaultColor = 'blue'
}
class Car extends Vehicle{
    static colors = [];
    static{
        this.colors.push(super.defaultColor, 'red')
    }
    static{
        this.colors.push('green')
    }
}
console.log(Car.colors)