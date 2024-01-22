const myDates= new Date()
console.log(myDates)

console.log(myDates.toDateString())//Mon Jan 22 2024
console.log(myDates.toLocaleDateString()) //1/22/2024

console.log(typeof myDates)//object
console.log(myDates.valueOf())//1705907443882

console.log(myDates.getMonth()+ 1)//0
console.log(myDates.getFullYear())//2024
console.log(myDates.getDate())//22
let myCreateDate = new Date("01-14-2023")
console.log(myCreateDate.toLocaleString())
let myTimeStamp =Date.now()

console.log(myTimeStamp);
console.log(myCreateDate.getTime())

console.log(Date.now()/1000)
console.log(Math.floor(Date.now()/1000))

//`${myDates.getDate}`

console.log(myDates.toLocaleString("default",{
    weekday: "long",

}))