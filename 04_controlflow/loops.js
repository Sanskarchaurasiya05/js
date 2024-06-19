//  for of

// for (const iterator of object) {
    
// }

const arr=[1,2,3,4,5]

for (const i of arr) {
    // console.log(i);
}

const greetings ="hello world!"

for(const greet of greetings){
    // console.log(`each char is ${greet}`);
}

// Maps

const map = new Map()
map.set('IN',"India")
map.set('USA',"bbb")
map.set('Fr',"France")

// console.log(map);

// destructring the array

for(const [key,value] of map){
    // console.log(key, '=>',value);
}

// mapping on object
// my using mapping we can not iterate the object bcz object is not iterable
// const myobj = {
//     game1:
// }


// *****************************************************************
const myobj = {
    js:'javascript',
    cpp:'c++',
    rb:"ruby"
}

// forin loop is used to iterate the object
for(const key in myobj){
    console.log(`${key} shortcut is for ${myobj[key]}`);
}
// for in loop is aslo traverse the array


// ******************************************************************

// for each loop

const coding = ["js","ruby","js","java"]

coding.forEach( function (val){
    // console.log(val);
})

function printMe(item){
    // console.log(item);
}
coding.forEach(printMe);


 coding.forEach( (item ,index , arr)=>{
//   console.log(item , index , arr);  
})



const my =[ {
    language:"js",
    languagefilename:"js"
},
{
    language:"java",
    languagefilename:"java"
},
{
    language:"c",
    languagefilename:"c"
}
]

my.forEach( (item) => {
    console.log(item.language);
})

