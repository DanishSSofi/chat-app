// primitive data types
let a = "deef";
let b =2;
let c = false;
let d;

console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));


// non primitive data types
let obj = { // key value pairs
    name :"Danish"
}

let ary= ["danish"] // orderd list of items

console.log(typeof(obj))
console.log(typeof(ary))


// hoisting in js : its the default behaviour of js where all the variable and function declarations are moved to the top or on the top 
hoistedvar = 4;
console.log(hoistedvar);
var hoistedvar;


// difference between == and === operators : == operator is used to compare values of variables only while as ===  operator is used to compare values as well as datatypes also.

var x = 2 // data type : number
var y = "2" // data type : string

console.log(x==y)
console.log(x===y)

// string coercoin  whenever a number is added to a string , the number is always converted to string
// + operator when used to add two numbers, outputs a number. The same ‘ + ‘ operator when used to add two strings, outputs the concatenated string
var sc1 = 4;
var sc2 ="4";
console.log(sc1+sc2)
console.log(sc2+sc1)
console.log(sc1-sc2) // in - operator , the string gets converted into a number and then the number is subtracted from sc1 i.e sc1-sc2

// JS is a dynamically typed language as the type of variable is checked during the runtime 

// NaN its a property in JS that represents not a number   .it indicates a value that is not a legal number 
console.log(isNaN(sc1))
console.log(isNaN(sc2))
console.log(isNaN(a));

//In JavaScript, primitive data types are passed by value and non-primitive data types are passed by reference.
   
