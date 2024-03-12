const coding = ['js','ruby','java','python','cpp']

// Ex. 1
coding.forEach((item)=>{
    // console.log(item)
})

// Ex. 2
function printMe(item){
    // console.log(item)
}
coding.forEach(printMe)

// Ex. 3
const values = coding.forEach(item=>{
    // console.log(item)
    // return item
})
// console.log(values)

// Ex. 4
const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNums.filter((num)=> num>4)
// console.log(newNums) 

// Ex. 5
const newNums2 = []
myNums.forEach((num)=>{
    if(num>4){
        newNums2.push(num)
    }
})
// console.log(newNums2)

// Ex. 6
const inventory = [
    { name: "asparagus", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "goat", type: "meat", quantity: 23 },
    { name: "cherries", type: "fruit", quantity: 5 },
    { name: "fish", type: "meat", quantity: 22 },
  ];
// const invt = inventory.filter(item => item.type === 'fruit')
const invt = inventory.filter(item => {
    return item.type === 'fruit' && item.quantity === 5
})
// console.log(invt)

// Ex. 7
const myNumbers = [1,2,3,4,5,6,7,8,9,10]
const newNumbs = myNumbers.map((num)=> num + 10)
// console.log(newNumbs)

// Ex. 8 -- chaning
const newNumbs2 = myNumbers
                .map(num=> num*10)
                .map(num=> num+1)
                .filter(num=> num>=40)
// console.log(newNumbs2)

// Ex. 9
const number = [1,2,3]
const totalNumber = number.reduce((acc, curval)=>{
    // console.log(`acc ${acc} and curval ${curval}`)
    return acc + curval
},0)
// console.log(totalNumber)

// Ex. 10
const shopingCart = [
    {
        itemName:'js course',
        price:2999,
    },
    {
        itemName:'python course',
        price:999,
    },
    {
        itemName:'mobile dev course',
        price:5999,
    },
    {
        itemName:'data science course',
        price:12999,
    }
]
const totalShopingAmount = shopingCart.reduce((acc, curval)=> acc+curval.price, 0)
console.log(totalShopingAmount)

