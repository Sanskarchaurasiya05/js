// Array
const myArr=[0,1,2,3,4,5,true,"sanskar"]
// array is an object , js ke array resizeble hote hai. 
// in js array indexing start from 0.
// js array copy creation creat shallow copies. 
// shallow copy of an object is a copy whoes properties share the same refernce point.
// dynamic copies ==> properties do not share the same reference.

const myhero = ["krishna" , "balaram"]

const myArr2 =  new Array(1,2,3,4)
console.log(myArr[0]);


// Arrays method

// push method:= push the ele in the array
myArr.push(6);
myArr.push(7);
console.log(myArr);

// pop method==> remove the ele
myArr.pop();
console.log(myArr);

// unshift() method ==> insert the ele in the fronts of the arr
myArr.unshift(9)
console.log(myArr);

// shift() method ==> remove the ele from the front
myArr.shift();
console.log(myArr); 

// question answer from the arr

// includes(x) method===>x is present or not in the arr
console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

// join() method bind the old arr with new array and also convert type into string
const newArr=myArr.join();

console.log(newArr);
console.log(typeof newArr);



// slice , splice

console.log("A ",myArr);

const myn1=myArr.slice(1,3);  // here 3 is not include and ye original array ko manipulate nhi krta hai
console.log(myn1);
console.log("B ",myArr);

const myn2=myArr.splice(1,3) // splice original array ko manupulate kr deta hai
console.log("c ",myArr);
console.log(myn2);

