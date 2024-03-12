// Ex. 1 --> .toSpliced()
const arr = ["red", "orange", "yellow", "green", "blue", "purple"]; 
const newArr = arr.toSpliced(2, 1, "pink", "cyan"); 
console.log(newArr); 
console.log(arr); 
// ["red", "orange", "pink", "cyan", "green", "blue", "purple"]
console.log(newArr[3]);
// // 'cyan'
console.log(arr[3]);