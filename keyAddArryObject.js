const myObj = {
    a:'Kaushal',
    b:1,
    c:false
}
// Object.keys()
// Object.keys(myObj).forEach(element => {
//     console.log(myObj[element])
// });
const keys = Object.keys(myObj)
console.log('Object.keys() --> ', keys)

// Object.values() 
let value = Object.values(myObj);
console.log('Object.values() --> ', value);

// Object.entries()
let entries = Object.entries(myObj);
let entriesValue = Object.entries(myObj)[1][1];
console.log('Object.entries() --> ', entries);
console.log('entriesValue', entriesValue);