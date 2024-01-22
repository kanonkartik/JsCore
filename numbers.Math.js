const accoutbalance = new Number(4527.986)
console.log(accoutbalance.toPrecision(4)) //4528
console.log(accoutbalance.toFixed(2))//4527.99
console.log(accoutbalance.toLocaleString("en-IN")) //4,527.986
console.log(accoutbalance.valueOf(2))//4527.986
console.log(accoutbalance.toString()) //4527.986
console.log(accoutbalance.toExponential(3))//4.528e+3

//Number.

//++++++++++ Maths+++++++++++

console.log(Math)
console.log(Math.abs(-7))//7
console.log(Math.round(7.7))//8
console.log(Math.ceil(8.1))//9
console.log(Math.floor(9.9))//9
console.log(Math.min(4,5,62,6,2))//2
console.log(Math.max(4,5,62,6,2))//62

console.log(Math.random())
console.log(Math.floor(Math.random()*10) +1)

const min = 100
const max = 200

console.log(Math.floor(Math.random() * (max - min +1))) + min