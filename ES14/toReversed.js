// Ex.-1 .toReversed() --> its returend new array do not change original array
const arr1 = ["a","b","c","d","e"];
// const result1 = arr1.reverse()
const result2 = arr1.toReversed();

// console.log(result1);
// console.log(arr1);

// console.log(result2);
// console.log(arr1);

// Ex.2  Replacing an element with with()
const arr3 = ["I", "am", "the", "Walrus"];
const newArr3 = arr3.with(3, "kaushal updated");

console.log(newArr3);
console.log(arr3);
