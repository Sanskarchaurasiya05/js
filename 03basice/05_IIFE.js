// IIFE =>>> Immediately Invoked function exprssion

// 1.global scope se pollution nhi chahiye and immediately execute ho jaaye

(function chai(){
    console.log(`DB database`)
})();       //()==> shows execution call ,ye invoked to ho jata hai but isse pta nhi hai ki execution ko rokna kha hai aur usko rukne ke liye hum ek semicolon ka use krte hai;

// IIFE==> globe scope ke pollution se problem hoti usko hatane ke liye hamne IIFE ka use kiya 

( function aurcode(){   //named IFFE
console.log(`DB`)
} )();

( (name) => {
    console.log(`DB ${name}`);
    } )('sanskar')

