//    javascript exeution context

// 1.global execution context ko this reference me rakh dete hai
// 2. function execution context
// 3.Eval execution contex

// js code run in two phases 1.memory creation phase , 2.execution phase

let val1 = 10
let val2=5
function addnum(num1 ,num2){
    let total = num1+num2
    return total 
}
let result =addnum(val1,val2)
let result2 = addnum(10,2)



// how execute this code
// steps 1.global excution/enviorment ==> isko sabse phale this me allocate kar de dete hai
// 2.memory phase===>saare variable ko memory phase me rkha jata hai aur unn variable me undefined rkhaa jata hai.
    //      val1=>undefined
    //      val2==>undefined
    //      addnum==>definiation
    // result1==>undefined
    // result2==>undefined

    // 3.Execution phase===> execute for addnum
        // val1==>10
        // val2===>4
        // addnum==>create a different excution context
                    //  a.new varaible enviorment + excution thread
                                


