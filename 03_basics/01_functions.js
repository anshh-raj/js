console.log("A");
console.log("N");
console.log("S");
console.log("H");

function sayMyName(){
    console.log("A");
    console.log("N");
    console.log("S");
    console.log("H"); 
}

sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2);
// }
function addTwoNumbers(number1,number2){
    // let result = number1 + number2
    // return result
    return number1+number2
}

const result = addTwoNumbers(3,4)
console.log("Result : ",result);

function loginUserMessage(username = "sam") {
    if(username===undefined){
        console.log("Please enter a username");
        return
    }
    return `${username } just logged in`
}

console.log(loginUserMessage("ansh"))
console.log(loginUserMessage())

function calculateCartPrice(cal1, val2, ...num1){
    return num1
} 
console.log(calculateCartPrice(200,400,500,2000));

const user = {
    username: "ansh",
    age: 2003,
}
function handleObject(anyObject) {
   console.log(`Username is ${anyObject.username} age is ${anyObject.price}`);
}
handleObject(user)
handleObject({
    username: "Akash",
    age:2000
})

const myNewArray= [200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,900,800,500]));
