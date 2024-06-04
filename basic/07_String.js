const name="sanskar"
const repocount = 21

console.log(name + repocount + "value"); //this additional value addition is not good so we use "backtags"

// backtags
// console.log(`Hello my name is  ${name}  chaurasiya ${repocount} and i am belong to krishna`) 
// this method is good when we inject anything in a string we use => ${inject variable}

// how to declare String 
const gamename = new String('sanskar-s-c') //=> they also gives key value pair and length and also access the prototype.
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

// substring and slice function ======>>

const newString = gamename.substring(0,4) //0 is include but 4 is not include
console.log(newString); //they ignore the negative value and start from 0

const anotherString = gamename.slice(-9,4) //they accept negative value and give the result reverse order
console.log(anotherString);

// trim function===>>

const newStringOne="   sanskar   " //this type of string is commonly used and here notuseful space so we simply trim it.
console.log(newStringOne);
console.log(newStringOne.trim());//they remove the space
// read the documentation of trim

// replace method=========>


// replace(x,y)==> x=>kya mai search karu ,y=>aur kisse mai replace karu
// browser can not understand the spaces
// and browser automaticalli convert the space into %20
const url = "https://sanskar.com/sanskar%20chaurasiya"
console.log(url.replace('%20','-'))


// inculde function ====> url me dekhna hai kuch present hai ya nahi
console.log(url.includes('sanskar')); //true

// Split method =================>
    //  by using split function we split the string when we encounter with -/,/and so on
//  read documentation of split function
// split('separator')
console.log(gamename.split('-'));

// read String documentation from mdn.

