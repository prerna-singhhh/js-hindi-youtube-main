function sayMyName(){
console.log("P");
console.log("r");
console.log("e");
console.log("r");
console.log("n");
console.log("a");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }



function addTwoNumbers(number1, number2){
//    let result = number1 + number2
//    return result
return number1 + number2
} 

const result = addTwoNumbers(4,5)

// console.log("Result:", result);

function loginUserMessage(username = "sam"){
    if(!username){
       console.log("PLease enter a username");
       return 
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Prerna"));
// console.log(loginUserMessage(""));
// console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1){
  return num1
}

// console.log(calculateCartPrice(200, 300, 400, 5000));

const user = {
    username: "Prerna",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
