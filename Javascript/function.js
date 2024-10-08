// //ES5

// function abc (name) { // function declaration

//     return "Hello, " + name; // function expression


// }

// console.log(abc("Ritika")) // function calling


// const abc = (name) => {
//     return "Hello, " + name; 
// }

// console.log(abc("Abhishek"))


// const abc = (a,b) =>  a*b;


// console.log(abc(2,3))



// Handling of this  in ES5

// function Person(name) {

//     this.name = name;
    
// }

// Person.prototype.sayHello = function() {

//    setTimeout( function() {
//     console.log("Hello," + this.name)
// }, 1000);
// }
// const person = new Person("xyz")
// person.sayHello();

// function Person(name) {

//     this.name = name;
    
// }

// Person.prototype.sayHello = function() {

//    setTimeout( () => {
//     console.log("Hello," + this.name)
// }, 1000);
// }
// const person = new Person("xyz")
// person.sayHello();



// function calculate(a,b,c,d) {

//     return a+b+c+d+e;
    


// }

// console.log(calculate(1,2,3,4,5))

// function sum() {
// var total = 0;
// for (let index = 0; index < arguments.length; index++) {

//     total += arguments[index];
// }
// return total;

// }

// console.log(sum(1,2,3,4))

// const sum = (...args) => {

//     return args.reduce((total, num) => total + num , 0)
// }

    
//     console.log(sum(1,2,3,4,5,6,7,8,9,0))
    

// ES5 default Parameters
// function greet(name) {
//     name = name || 'Guest'

//     return "Hello, " + name
// }

// console.log(greet())



const greet = (name = 'Guest') =>  "Hello, " + name

console.log(greet())
