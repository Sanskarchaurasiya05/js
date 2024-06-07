const tinderuser = new Object()
// OR
// const tinderuser={}

tinderuser.id="123wer"
tinderuser.name="tom"
tinderuser.isLoggedIn=false

// console.log(tinderuser);

// nesting of object
const regularuser = {
    email:"some@gmail.com",
    fullname:{
      userfullname:{
        firstname:"snakar",
        lastname:"chaurasiya"
      }
    }
}

// console.log(regularuser.fullname?.userfullname.firstname)

// combine the object==>

    const obj1 = {1: "a",2:"b"}
    const obj2 = {3: "a",4:"b"}

    // const obj3 = {obj1,obj2}
    // console.log(obj3); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }


// const obj4 = Object.assign(obj1,obj2)
// console.log(obj4); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// const obj4 = Object.assign({},obj1,obj2)
// console.log(obj4);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


// spread method to combine the two object 
// const obj3 = {...obj1, ...obj2}
// console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


// when data come from database
const users = [
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
]

console.log(tinderuser);

console.log(Object.keys(tinderuser));  //imporatant
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('isLogged'));



