function calculatecartprice(val1,val2,...num1){
return num1
}

//when we have a more than value than one value and acees these values by three dot(...==>rest/spread operation).
//console.log(calculatecartprice(200 , 400 , 500 , 20000))
// value1 and value2 me 200 and 400 chle gyee hai aur rest of chezze chli gyii hai num1 me.

const user={
username:"hitesh",
price:200
}

function handleObject(anyobject){
 console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObject(user)

handleObject({
username:"sam",
price:400
})


const mynewarray = [200 , 400 , 100 , 500]

function returnsecondvalue(getArray){
return getArray[1]
}

//console.log(returnsecondvalue(mynewarray));

console.log(returnsecondvalue([200 , 400 , 500 , 600]));


