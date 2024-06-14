

let a=300
if(true){
    let a=10
    const b=20
   console.log("Inner: ",a);
}

console.log(a);
// console.log(b);
// console.log(c); //that's why we not use war bcz in scope they not work properly


function one(){
    const username = "sanskar"

    function two(){
        const website = "youtude"    //jo bhi variable hum two fxn ke ander banaye hai vo ander khtm ho jaayega
        console.log(username);          //two one ko to acess kr skta hai but one two ko access nhii kr sakta 
            }                        //yhaa par line by line executiopn hota hai
    // console.log(website);
    two()
}
one()


if(true){
    const username = "sanskar"
    if(username == "sanskar"){
        const website = "youtube"
        console.log(username + website);
    }
    // console.log(website);
}


// console.log(username);

// ###################################################################

console.log(addone(5));
function addone(num){
    return num+1
}



console.log(addtwo(2));  // in this case it is not possible known as hosting
const addtwo = function(num){
    return num+2
}


