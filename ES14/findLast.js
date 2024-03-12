// Ex. 1 --> .findLast
const arr1 = [54, 34, 55, 75, 98, 77];
const findLast = arr1.findLast((element)=> element>54)
// console.log(findLast)

const arr2 = [54, 34, 55, 75, 98, 77];
const myObject = {testCase: 3};
const lastEvenIndex = arr2.findLast((element) => {
  return element % myObject.testCase === 0;
}, myObject);

console.log(lastEvenIndex); // 75
