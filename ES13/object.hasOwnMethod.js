const obj = Object.create(null);
obj.color = 'green';
obj.age = 2;
obj.hasOwnProperty = () => true;

console.log(Object.hasOwn(obj, 'color'))
console.log(Object.hasOwn(obj, 'age'))

// console.log(obj.hasOwnProperty('name'))