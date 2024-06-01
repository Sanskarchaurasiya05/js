// const ,we cannot change. 
const accountId=1445443322 
let accountEmail="sanskar@google.com"
var accountPassword="12345"
accountCity="jaipur"
// it's possible but don't use
// we declare variable by two types:let , var(problem with scope)
// but at this time var we not use bcz js does not work with scope.
// accountId=2 : not allowed

let accountstate

accountEmail="hare@google.com"
accountPassword="54321"
accountCity="vns"
console.log(accountId);
/*
please do not use var
bcz of issue in block scope and funcrtional scope
*/
console.table([accountId,accountPassword,accountCity,accountEmail,accountstate])