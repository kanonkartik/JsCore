let prize = true

console.log(typeof(prize))

let valueInNumber =Number(prize)
console.log(typeof(valueInNumber))
console.log(valueInNumber)

// "201" =>201  
//"201ss"=> NaN ,not a number
// true => 1, false => 0

let isLoggedIn ='yo'
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1=> true; 0=> false
// ""=>false
//"yo"=>true

let getNumber = 45

let stringNumber = String(getNumber)
console.log(stringNumber)
console.log(typeof stringNumber)

// ******** OPERATION ********

let value = 9
let negvalue = -value
console.log(negvalue)

let name1="Mitesh"
let name2=" Sahu"
let fullName=name1 + name2
console.log(fullName)

console.log("1"+ 2); //12
console.log(1 + "2");//12
console.log("1"+ 2 + 2);//122
console.log(1 + 2 + "2");//32

console.log((3+4)*5%3)// insted of above use ()

console.log(+true) //1
console.log(+"")//0 this not good practice

let num1 , num2 , num3
num1= num2=num3 =2+2 // not good practice

//prefix {value convert before}
let x=10
let y=++x
console.log(`x:${x} , y:${y}`) // x:11 y:11


//postfix {value convert after}
let X=10
let Y=X++
console.log(`X:${X} , Y:${Y}`) // x:11 y:11
/* 
If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.

If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.
*/

