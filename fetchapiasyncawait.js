const a = async ()=>{
    const api = await fetch('https://jsonplaceholder.typicode.com/posts');
    return api.json()
}
a().then(res=>{
    console.log(res);
})