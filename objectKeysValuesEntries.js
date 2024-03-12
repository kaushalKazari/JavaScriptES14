const mySym = Symbol('key1')
const deskObj = {
    height: "4 feet",
    weight: "30 pounds",
    color: "brown",
    'full name': 'Kaushal kishor',
    material: "wood",
    [mySym]:'mykey1'
};
// symbol
console.log('Symbol --> ', deskObj[mySym])
console.log('Symbol --> ', typeof deskObj[mySym])
// Object.keys
const keys = Object.keys(deskObj);
console.log('Object.keys --> ', keys)

// Object.values
const values = Object.values(deskObj);
console.log('Object.values --> ', values);
console.log('Object.values index 1 --> ', values[1]);

// Object.entries
const entries = Object.entries(deskObj);
console.log('Object.entries --> ', entries);

deskObj.material = 'k@gmail.com'
console.log('deskObj --> ', deskObj)
// Object.freeze(deskObj)
deskObj.material = 'kaushal@chatgpt.com'
console.log('deskObj --> ', deskObj)
deskObj.email = function(){
    console.log('kaushalkishor143@gmail.com')
}
console.log(deskObj.email())