const userId = 1234;
let userName = "Harkirat";
var userAddress = "wing 27";
userGender = "M";
let userSal;
/*
var is bit problematic because 
Function Scoping:
Hoisting:
console.log(y); // undefined
var y = 5;
No Block Scope: 
if (true) {
  var z = 20;
}
console.log(z); // 20, even though it's declared inside the if block

In modern JavaScript, it's recommended to use let and const for variable declarations because they provide block scope and help prevent some of the issues associated with var
*/

console.table([userId,userName ,userAddress,userGender,userSal])

//userId = kanon; coud not be changed!!
userName = "malinga";
userAddress=" 45 Ns";
userGender="him/his";

console.table([userId,userName ,userAddress,userGender,userSal])

