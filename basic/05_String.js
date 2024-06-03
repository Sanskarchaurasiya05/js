const name="sanskar"
const repocount = 21

console.log(name + repocount + "value"); //this additional value addition is not good so we use "backtags"

// backtags
// console.log(`Hello my name is  ${name}  chaurasiya ${repocount} and i am belong to krishna`) 
// this method is good when we inject anything in a string we use => ${inject variable}

// how to declare String 
const gamename = new String('sanskarsc') //=> they also gives key value pair and length and also access the prototype.
console.log(gamename[0]); // here we acess 0 key value pair
//  now we acess the prototype
console.log(gamename.__proto__); //here is two underscore output={}

// now we use some object
console.log(gamename.length);

console.log(gamename.toUpperCase());
// agar dekhna hai kon sa character khaa pr hai use => charAt(pos)
console.log(gamename.charAt('5'));
// agarcheck krna hai character kis pos pr hai use => indexOf('character')
console.log(gamename.indexOf('a'));

