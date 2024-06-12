// function

// implementation of function

function saymyname(){
    console.log("i");
    console.log("i");
    console.log("i");
    console.log("i");
}
// saymyname()

// 
// function addtwonumber(num1 , num2){
//     console.log(num1 + num2);
// }

function addtwonumber(num1 , num2){
  let result = num1 + num2
  return result
//   console.log("sanskar") : return ke baad jo kuch bhi hum likhege saare unreachable hoge
}
const result = addtwonumber(1 , null)

// console.log("result: ",result);


function loginusermessage(username){
    if(username === undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginusermessage("sanskar"));