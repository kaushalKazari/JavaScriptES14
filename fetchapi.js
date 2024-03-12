let p = fetch('https://jsonplaceholder.typicode.com/posts');
p.then(res=>{
    return res.json()
    console.log(res.json())
}).then(val=>{
    console.log(val);
})