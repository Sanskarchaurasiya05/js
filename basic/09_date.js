// date

let myDate = new Date()
console.log(myDate);
// how to use string
// we try to convert date into string
console.log(myDate.toString());
// some methods must be try===> toDateString() , toISOString() , JSON , toLocaleDateString() , toLocaleString()
console.log(myDate.toLocaleString());
console.log(typeof mydate);

// when specific date declare krni ho to
let myCreateDate = new Date(2023,0,23); //in js month start from 0
console.log(myCreateDate.toDateString());

let myCreateDate1 = new Date(2023,0,23,5,4);
console.log(myCreateDate1.toLocaleString());

// more specific formate of date

let myCreateDate2 = new Date("01-14-2023");  //in india we use mostly===>mm/dd/yy
console.log(myCreateDate2.toLocaleString());

// timeStamp====>
// it is useful when we design quizes , polls and so on
    let mytimeStamp = Date.now()
    console.log(mytimeStamp);
// getTime()===>jo bhi date declare ki hai uski value mil jaayegi milisec
    console.log(myCreateDate2.getTime());
    // convert into second
    console.log(Math.floor(Date.now()/1000));

    let newDate = new Date()
    console.log(newDate);
    console.log(newDate.getMonth()); //here we gert month ==5 , month start from 0 in js
    console.log(newDate.getMonth()+1);
    console.log(newDate.getDay());

// console.log(`${newDate.getDay()} and the time is `)

// it is important
newDate.toLocaleString('default',{
      weekday: "long",
       
})
console.log("hello sanskar");


