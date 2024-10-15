// let arr1 = [1,2,3]
// let arr2 = [...arr1]
// console.log(arr1)
// console.log( arr2)

// let obj1 = {a:1, b:2}
// let obj2 = {c:3, d:4}

// const mergedObj = {...obj1, ...obj2}
// console.log(mergedObj)

//Destructuring with spread operator
// const [first, second, ...remaining] = [1, 2, 3, 4, 5];

// console.log(first)
// console.log(second)
// console.log(remaining)


function sum(a,b,c) { // function declaration
    
    return a+b+c // function expression
}

const numbers = [1,2,3]

console.log(sum(...numbers)) // function calling
