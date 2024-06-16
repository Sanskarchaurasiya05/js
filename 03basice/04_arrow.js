// this keyword ==> explain current context 

const user = {
    username: "snskar",
    price: 999,                    //object ke ander hi ele ko access krne ke liye hum this keyword ka use karte hai.

    welocomemessage: function() {
        console.log(`${this.username},welcome to website`)
        console.log(this);
    }
}


//  user.welocomemessage()    //object ke ander fxn ko aceess ase krte hai

// how to change the value inside the object
user.username="sam"
//  user.welocomemessage()

// console.log(this);


// function chai(){
//     let username= "krishna"
//     console.log(this.username);  //undefined
// }

// chai()   // jab hum kisi fxn ke ander this ko print krte hai to hume bhaut kuch mite hai but ander bhaut kuch milta hai


// declaration fxn using arrow fxn =====>>>>>>>>>>>


// const chai = function(){
//     let username= "krishna"
//     console.log(this.username);  //undefined
// }

// Arrow function (=>)    ====>>>
// const chai = () =>{
//     let username= "krishna"
//     console.log(this);  //undefined
// }
// chai()


// Arrowfxn discussion

// explicitly return
// const addtwo= (num1,num2) => {
//     return num1+num2
// }

// here we write above fxn implicitly return

// const addtwo = (num1 , num2) => num1+num2

// OR

// const addtwo = (num1 , num2) =>(num1 + num2) 

// console.log(addtwo(3,4))

// how to return object 

// const addtwo = (num1 , num2) => ({username: "sanskar"})
// console.log(addtwo(3,4));

const myArray = [2,3,4,5]





