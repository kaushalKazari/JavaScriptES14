const p1 = new Promise(function(resolve, reject) {
    setTimeout(()=>{
        resolve('Value 1');
    },1000)
})
const p2 = new Promise(function(resolve, reject) {
    setTimeout(()=>{
        reject('Value 2');
    },2000)
})
const p3 = new Promise(function(resolve, reject) {
    setTimeout(()=>{
        resolve('Value 3');
    },3000)
})
// p1.then((res)=>{
//     console.log(res);
// })
// const promiseAll = Promise.all([p1,p2,p3])
const promiseAll = Promise.allSettled([p1,p2,p3])
promiseAll.then((res)=>{
    console.log(res);
})