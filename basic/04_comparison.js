// when we compare same datatype it is easy 

// console.log(2>1) //output=boolean form
// console.log(2!=1) //output=boolean form

// when we compare different datatypes

// console.log("2">1); //output=true (automatically js convert the string into number but har baar ye kare ye jarurui nhi hai)
// console.log("02">1); //output=true  (most of the time they did not give predictable ans)
// avoid these type of conversion
// clean code is valuable
// so whenever we compare make sure datatype is same


// some common problems

// console.log(null>0); //o=f
// console.log(null==0);//o=f
// console.log(null>=0);//o=t

// the reson is that an equality check == and comparisons > < >= <= work differently.
// comparisons convert null to a number,treating it as 0.
// that's why null>=0 is true and null>0 is false

// console.log(undefined>0); //o=f
// console.log(undefined==0);//o=f
// console.log(undefined>=0);//o=f


//  (strict check)=> === :checj the values and also it's datatypes (isme items(elemnts) ka conversion nhii hota hai)
console.log("2"===2);

