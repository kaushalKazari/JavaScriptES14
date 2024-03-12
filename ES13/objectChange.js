let capitals = [
  { name: "kaushal"},
  { name: "Yash"},
  { name: "Divyansh"},
  { name: "Kajal"},
];
const changeName = capitals.map(obj=>{
    // console.log(obj);
    obj['name'] = obj['kaushalUpdated']
    delete obj['name']; 
    return obj;
})
console.log(changeName)
