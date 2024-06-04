const score=400
// console.log(score); //output:400


const balance = new Number(100)
// console.log(balance); // output:[Number: 100] ye specifically bata dega hum kya enter kar rhe hai

// toString() method ===> convert the number into string
// examples
//  console.log(balance.toString().length);

//  toFixed() method===>
//  console.log(balance.toFixed(2)); // gives the number two digit decimal

 const othernumber = 23.8966

//  toPrecision() method===>
//  console.log(othernumber.toPrecision(3)) //output=23.9

 const othernumber1 = 123.8966
//  console.log(othernumber1.toPrecision(3)) //output=124

// console.log(othernumber1.toPrecision(4))

// toLocaleString() method==>
const hundreds = 10000000000 //difficult to see no. of zeroes
// console.log(hundreds.toLocaleString()); //output==> 10,000,000,000

// console.log(hundreds.toLocaleString('en-IN')); 


// +++++++++++++++++++++++++++++++++MATHS++++++++++++++++++++++++++++

console.log(Math.abs(-4));
console.log(Math.round(4.6)); //decimal value ko hatta deta hai

// ceil(x.efjfvb) method ==> x thoda sa bhi decimal me bada ho to ye upper value ko consider krta hai
console.log(Math.ceil(4.3));

// floor(x.hjbhfdbv)=====>x point me jaye jitna bada ho uska floor hmesha x hi hoga
console.log(Math.floor(4.9));

// min()===> to  find the lowest value in the array
console.log(Math.min(4 ,3,6,2,1));
// is tarah max() bhii hogaa

// Math.random()===>
    console.log(Math.random());
// Math.random() ki value always 0 aur 1 ke bich hoti to kyaa hota hai==>
    console.log(Math.random()*10); //jab hum isse 10 se multiply kar dete hai to hume integer value milti hai with decimal
console.log((Math.random()*10) + 1);//but kabhi-kabhi vo hume 0 value bhi de deta hai isko avoid krne ke liye hum +1 kar dege
console.log(Math.floor(Math.random()*10) + 1);//here we floor to get smaller value and gives single value

// but kai baar case aata hai ki hume min bhi and max bhi defined krna hai
// trick
// learn formula===>(max - min + 1)
    const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1))+min);
 