const useremail = "sanskar.ai"

if(useremail){
    console.log("got user email");
}else{
    console.log("don't have user email")
}

// false===> 0 , -0 , BigInt , 0n , "" , null ,undefined , NaN 
// rest of all true
// some imp true value

// true value ===>"0" , 'false' , " " ,[] , function(){}  (emoty fxn)


const user=[]
if(user.length === 0){
    // console.log("Array is empty");
}

const emptyobject = {}

if(Object.keys(emptyobject).length === 0){
    // console.log("object empty");
}

// **********************************************************

// Nullish coalescing operator (??): null undefined
// let val1
//  val1 =5 ?? 10  //val1=5
// val1=null ?? 10   //val1=10
// val1 = undefined ?? 15   //val1=15
// val1= null ?? 10 ?? 20    //val1=10


// Terniary operator==========>>>>>>>>>>>>>>>>>

// condition ? true : false

const price =100
// price <= 80 ? console.log("less than 60") :console.log("more theen 60") 






