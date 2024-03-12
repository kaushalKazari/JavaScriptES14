var User = function(firstName, courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`course count is ${this.courseCount}`);
    }
}

const Obj1 = new User('Kaushal', 12)
console.log(Obj1)