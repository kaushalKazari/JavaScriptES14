const p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('P1 Data');
    },5000)
})

const p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('P2 Data');
    },10000)
})

const getData = async ()=>{
    console.log('Before p1 await ...')
    const val1 = await p1;
    console.log(val1);
    console.log('After p1 and Before p2 await ...')
    const val2 = await p2;
    console.log(val2);
}
getData();