// Ex. 1
const promiseOne = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('Data resolved');
    },3000)
})
promiseOne.then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(`error ${err}`)
})

// Ex. 2
const promiseTwo = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = true;
        if(error){
            resolve({username:'kaushal', password:'123'})
        }else{
            reject('ERROR: JS went wrong')
        }
    })
})
async function consumePromiseTwo(){
    const response = await promiseTwo
}
// Ex. 3
async function getAllUsers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        // console.log('API Data --> ', data)
    } catch(err){
        console.log('E: ', err)
    }
}
getAllUsers()

// Ex. 4
fetch('https://jsonplaceholder.typicode.com/users')
.then((res)=> res.json())
.then(res=> console.log('API Data 2 -->', res))
.catch((err)=> console.log(`Error ${err}`))