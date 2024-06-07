// Singelton===>jab bhi hum literals ke liye declare krte hai to singrlton nhi banta hai

//  object literals

// construction of object
// const jsuser = {}  //empty object

//jab hum kisi object me array ko define krte hai to hum key and value dono hi defined kr sakte hai



// how to declare symbol===>
    const mysym = Symbol("key1")

const jsuser={
    name:"sanskar" , //yhaa pr key= name hai and value =sanskar hai
    "full name":"sanskar chaurasiya", //important
    [mysym]:"mykey1",
    age:20,
    location:"vns",
    email:"sanskarAgoogl@.com",
    isLoggedIn: false,
    LastLoginDays:["mon","sat"]
} 

console.log(jsuser.email);
console.log(jsuser["email"]);
console.log(jsuser["full name"]);
console.log(typeof jsuser.mysym); //type== string but mysym is symbol type
console.log(jsuser[mysym]);


// change the object value
jsuser.email="krishna@gmail.com"

// lock the value
// Object.freeze(jsuser);
jsuser.email="balram@gmail.com"
console.log(jsuser);


jsuser.greeting = function(){
    console.log("hello js user");
}

console.log(jsuser.greeting);//function return type
console.log(jsuser.greeting());//isse fxn me jo likha hai vo print karega

jsuser.greetingtwo = function(){
    // convert string into backticks
    console.log(`hello js user,${this.name}`); //jab same object ko refernce krna hai this ka use karege jisese uski saari property inherit ho jaayegi 

}
console.log(jsuser.greetingtwo());

