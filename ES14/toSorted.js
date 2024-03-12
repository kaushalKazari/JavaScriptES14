// Ex.-1 .toSorted() ---> Its return new array
let arr = [5, 4, 2, 3, 1];
// var arr1 = arr.sort();
var arr2 = arr.toSorted();
// console.log('Old array', arr)
// console.log('New array', arr2)

// Ex. 2  of .toSorted() ---> Using the comparator function
const numbers = [10, 5, 2, 7, 3, 9, 1, 6, 4];
const sortedNumbers = numbers.toSorted((a, b) => {
  return b - a;
});
// console.log("Sorted numbers", sortedNumbers);

// Ex. 3  of .toSorted() ---> with objects
const objects = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Bill", age: 40 },
  { name: "Mary", age: 20 },
];
const sortedObjects = objects.toSorted((a, b) => {
  // return a.name.localeCompare(b.name);
  return a.name.localeCompare(b.name)
});
console.log(sortedObjects);

