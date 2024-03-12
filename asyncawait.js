async function kaushal(){
    const delhiWeather = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('18 degree');
        },1000)
    })
    const mumbaiWeather = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('15 degree');
        },2000)
    })
    console.log('Fetching Delhi Weather, please wait...')
    const delhiW = await delhiWeather;
    console.log('Delhi weather is ' + delhiW)
    console.log('Fetching Mumbai Weather, please wait...')
    const mumbaiW = await mumbaiWeather;
    console.log(`Mumbai weather is ${mumbaiW}`)
    return [delhiW, mumbaiW]
}
// console.log(kaushal());
const p = kaushal();
p.then(res=>{
    console.log(res);
})
