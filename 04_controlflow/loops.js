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


const codings = ["js" , "ruby" , "java" , "cpp"]

// for each loop does not return value
// const values=coding.forEach ((item) => {
//     // console.log(item);
//     return item
// })

// console.log(values);


const mynums = [1,2,3,4,5,6,7,8,9,10]

// filter operation

// filter ke ander hume call back values milta hai 
// let newnums = mynums.filter( (num) => num >4 )
// console.log(newnums);


// when we use curly brases / scope then hume return ka use krna hoga
// const newnums = mynums.filter( (num) => {
//    return num > 4
// })
// console.log(newnums)


const newnums=[]
mynums.forEach ( (num) => {
    if(num > 4){
        newnums.push(num)
    }
})
// console.log(newnums)


// **********************************************************************

const mynumers = [1,2,3,4,5,6,7,8,9]

// const newnum=mynumers.map( (num) => num+10)
// console.log(newnum);


// chaining
const newNums = mynumers
                 .map( (num) => num*10)
                 .map((num) => num+1)
                 .filter( (num) => num >=40)

// console.log(newNums);

// *******************************************************************

// reduce method====> 

    const myNums = [1,2,3]

    // const mytotal = myNums.reduce( function (acc,currval){
    //     console.log(`acc:${acc} and currval: ${currval}`);
    //     return acc + currval
    // },3)

    // console.log(mytotal);


    // arrow fxn

//     const mytotal = myNums.reduce( (acc , curr)=> acc+curr ,0)

//    console.log(mytotal)

const shoppingCart = [
    {
        itemName: "js",
        price:2999
    },
    {
        itemName: "cpp",
        price:3999
    },
    {
        itemName: "java",
        price:4999
    },
]

const pricetopay= shoppingCart.reduce( (acc,item)=>acc + item.price , 0)

console.log(pricetopay);

