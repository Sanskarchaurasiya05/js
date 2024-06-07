const hero = ["thor","ironmen","spiderman"]
const dc_hero=["superman" , "flash" , "batman"]

// hero.push(dc_hero); //ye array ko bhi as a single ele le leta hai
// console.log(hero);
// console.log(hero[3][1]);

// // concat() method===> we join the two array by using concat fxn
// const allhero=hero.concat(dc_hero)
// console.log(allhero);


// spread() method===> kaach ka glass lege aur usko drop kr dege spread ho jaayegaa
// const all_new_hero=[...hero,...dc_hero]
// console.log(all_new_hero);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// how to handel===>using flat(depth) method hack depth=infinite

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

// first we check it is array or not
console.log(Array.isArray("sanskar"));
// how to convert into array ===> from()
console.log(Array.from("sanskar"));

console.log(Array.from({name:"sanskar"}))  //interesting


let score1=100
let score2=200
let score3=300
// Array.of()==> return a new array of set of element
console.log(Array.of(score1 , score2 , score3));