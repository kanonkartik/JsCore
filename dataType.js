//number=> 2 to power 53
// bigint
//string=>""
//boolean=>true/false
//null=>stand alone value 
/*It's important to note that in JavaScript, the typeof null is "object," which is a historical quirk. It doesn't mean that null is an object; it's a primitive value. The typeof operator behavior with null is considered a mistake in the language, but it has been preserved for compatibility reasons.*/
// undefiend
// symbol =>unique

const { copyFileSync } = require("fs")

//object
console.log(typeof undefined)//undefine

console.log(typeof null)// object
//https://262.ecma-international.org/5.1/#sec-11.4.3

const myobj= {
    name:"kk",
    age:23
}
console.log(typeof myobj)

const fun = function(){
    console.log("hey there")
}

console.log(typeof fun)

//Stack (Primitive-:string ,number boolean null undefined , symbol, object), Heap(non-Primitive:function, object, arry)

let userEmail ="bring@gmail.com"

let anotherEmail= userEmail

anotherEmail="bring2@gmail.com"
console.log(userEmail)
console.log(anotherEmail)

// This behavior is because primitive values are stored directly in the variable, and when you assign one variable to another, the value is copied. Any changes to the value of one variable do not affect the other.


let user01 ={
    email:"yo09@gmail.com",
    pass:1234
}

let userTwo =user01

userTwo.pass=8797
console.log(user01)
console.log(userTwo)

/* bject Initialization:
user01 is initialized as an object with properties email and pass.
userTwo is assigned the reference to the same object as user01.
Modification via userTwo:
When you modify userTwo.pass to 8797, you are actually modifying the same object that both user01 and userTwo reference.
This behavior is because userTwo and user01 are pointing to the same object in memory. If you want to create a new object with the same properties as user01 but independent of it, you can use the spread operator (...) or Object.assign():

*/
let useR01 = {
    email: "yo09@gmail.com",
    pass: 1234
};

let userTwO = { ...useR01 };  // Using the spread operator to create a new object

userTwO.pass = 8797;

console.log(useR01);
console.log(userTwO);
