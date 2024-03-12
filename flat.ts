const arr1 = [0, 1, 2, [3, 4]];
console.log('arr1 --> ', arr1.flat());
const arr2 = [0, 1, [2, [3, [4, 5]]]];
console.log('arr2 --> ',arr1.flat(Infinity));
