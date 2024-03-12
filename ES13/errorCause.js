// const apiCallThatCanThrough = () =>{
//     console.log('test')
// }
function userAction(){
    try{
        apiCallThatCanThrough()
    }catch(err){
        throw new Error('New Error Message', {cause:err})
    }
}
try{
    userAction()
}catch(err){
    console.log(err)
    console.log(`Cause by; ${err.cause}`)
}