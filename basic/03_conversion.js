let score1=33  //number

console.log(typeof score1)  //number
console.log(typeof(score1))  //number


let score="33"  //string

let valueInnumber=Number(score)  //convert string into number(jisme convert krna hai uske phale letter ko capital me likho like=> Number)
console.log(typeof valueInnumber) //number => garanty kya hai vo 33 aayega let's check it

let score2="33abc"

let valueInnumber1=Number(score2)  
console.log(typeof valueInnumber1)

console.log(valueInnumber1) //NaN(not a number)

let score3=null

let valueInnumber2=Number(score3)  
console.log(typeof valueInnumber2)

console.log(valueInnumber2)



let score4=undefined

let valueInnumber3=Number(score4)  
console.log(typeof valueInnumber3)

console.log(valueInnumber3)


let score5=true

let valueInnumber4=Number(score5)  
console.log(typeof valueInnumber4)

console.log(valueInnumber4)


let score6="sanskar"

let valueInnumber5=Number(score6)  
console.log(typeof valueInnumber5)

console.log(valueInnumber5)


// "33"=>33
// "33and" => NaN
// true =>1



let isLoggedIn = 1

let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)


let isLoggedIn1 = ""

let booleanIsLoggedIn1=Boolean(isLoggedIn1)
console.log(booleanIsLoggedIn1)


let isLoggedIn2 = "sanskar"

let booleanIsLoggedIn2=Boolean(isLoggedIn2)
console.log(booleanIsLoggedIn2)


let somenumber = 33

let stringNumber=String(somenumber)
console.log(typeof stringNumber)
console.log(stringNumber)

console.log()