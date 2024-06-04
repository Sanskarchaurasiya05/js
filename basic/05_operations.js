// let value=3
// let negvalue=-3
// console.log(negvalue);

// console.log(2+2);
// console.log(2*2);
// console.log(2**3); //it gives a power


// let str1="hello"
// let str2="sanskar"

// let str3=str1+str2//only add
// console.log(str3);


// // If one is integer and other is string 
// console.log(1+"2");//output=12 
// console.log(1+"2");//output=12

// console.log("1"+2+2);//output=122  (means if first string hoga aur aage integer hoga to output string aayega)

// console.log(1+2+"2");//output=32    (first integer hoga aur aage string hoga to output string hi aaye but aage waalw act karege integer ki tarah aur aed ho jayege.)


// console.log(+true); //output=1 (it is not very good approach)
// console.log(+""); //output=0 (it is not prefered)


// let num1,num2,num3
// num1=num2=num3=2+2 //(this type is not good )

let gamecounter=100
gamecounter++;
console.log(`gamecounter:${gamecounter}`);

++gamecounter;
console.log(gamecounter);  //read precedence operator => prefix and postfix (read from prefix and postfix js mdn)


let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
