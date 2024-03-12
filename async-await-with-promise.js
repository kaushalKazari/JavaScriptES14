const p1 = (resolve, reject) =>{
	setTimeOut(()=>{
	resolve('p1 content')
},2000)}

const p2 = (resolve, reject) =>{
	setTimeOut(()=>{
	resolve('p2 content')
},1000)}

async function func1(){
	const v1 = await p1;
	console.log('p1 means v1 variable--> ', v1);
const v2 = await p2;
	console.log('p2 means v2 variable--> ', v2);
}
func1()