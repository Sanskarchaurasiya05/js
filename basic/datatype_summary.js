// kis tarah se memory me data ko rakha jata hai aur access kiya jata hai uss base pr datatype ki do cotegory hai
// 1.primitive datatype => 7 types
//String,number,boolean,null,undefined,symbol,BigInt(for very large value) 



// js are dynamicallt type language
// number type => const score=12  const score=12.2
// const isLoggedIn=false  = boolean type
// const outsidetemp=null  =null type

// useremail => undefined type

// const id = Symbol('123')
// const anotherId=Symbol('123')

// console.log(id==anotherId) =>output=false


// 2.Reference type(non primitive)=>ye values vo hai jo memory me inka refernce directly allocate kiya jata hai.
// Array , object , function.
// curly braces ke andar objects hote hai

 const heros=["hare","krishna","ram"] //Array

// let myobj={
//     name: "sanskr",  //Object
//     age: 22,
// }

// const myfunction=function(){
//     console.log("hello")
// }

// how to know datatype of any number 
console.log(typeof heros);
