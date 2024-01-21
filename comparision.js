console.log(null>0);
console.log(null==0);
console.log(null >= 0);

console.log(undefined>0);
console.log(undefined==0);
console.log(undefined>=0);
//When comparing undefined to a number, the result is always false. This is consistent with the behavior of comparing undefined to any other value.

// === 
console.log("2" === 2);

//null is treated as 0 when using the equality operator (==) or the greater than or equal to operator (>=). This behavior is a result of type coercion. However, null is not considered greater than 0, so the first statement is false.

//In JavaScript, when using ==, type coercion can lead to unexpected results. It's generally recommended to use the strict equality operator === to avoid type coercion and ensure that both value and type are compared.