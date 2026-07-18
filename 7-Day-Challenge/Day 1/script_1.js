// Variables with var, let and const

var firstName = "Piyush" // Can be modified later but not recommended in modern programming
// firstName = "Aman" -> Allowed but not recommended
// firstName is the name of variable, which stores the value Piyush, it's like a container name or block name in memory which stores the value.

let midName = "Kumar" // Can be modified also but recommended only when value is needed to change later
// midName = "Prakash"; -> Allowed but used only where value need to be change later

const lastName = "Shukla" // Cannot be modified later
// lastName = "Mishra"; -> Not allowed, give error

console.log(firstName)
console.log(midName)
console.log(lastName)

// Datatypes

const string_type = "Texts and Characters are of string datatypes."
console.log("Any value inside single or double quotes is string: eg. " ,string_type)
console.log(typeof string_type) // typeof is a method to check the datatype of a variable

const number_type = 20
console.log("Numbers (Integers and Fractional) are of integer datatype: eg. ", number_type)
console.log(typeof number_type)

const boolean_type = true
console.log("Boolean types has only two values- true or false: eg. ", boolean_type)
console.log(typeof boolean_type)

const null_type = null;
console.log("null type is an empty space in memory leaved intentionally by the programmer: eg. ",null_type)
console.log(typeof null_type) // it's datatype is object, some calls it a bug made by js developer but doesn't fixed yet...

let undefined_type;
console.log("If any values is not known now but required in the future, then we create a space in memory for that with variable name and its datatype is undefined: eg. ", undefined_type)
console.log(typeof undefined_type)


// Operators

// Arithmetic Operators -> + - * / ** % (All calculative tasks)

const a = 35;
const b = 20;

console.log("The sum of above numbers is: ", a+b) 
console.log("The difference of above numbers is: ", a-b)
console.log("The product of above numbers is: ", a*b)
console.log("The quotient of above numbers is: ", a/b)
console.log("The exponential value of above numbers is: ", a**b) // This means a to the power b.
console.log("The remainder of above numbers is: ", a%b)

// Comparison Operators -- < > >= <= == === !== (They compare values and return true or false)

const x= 5

console.log("Is 5>3: ", 5>3)
console.log("Is 5<3: ", 5<3)
console.log("Is 5>=6: ", 5>=6)
console.log("Is 5<=5: ", 5<=5)
console.log("Is 5===3: ", 5===3) // This is strict equal to and preferred
console.log("Is 5==5: ", 5=='5') // Double equal is not recommended to use, because it only checks value not type
console.log("Is 5!==5: ", 5!==5)

// Logical Operators -> and (&&), or(||), not(!)

const hasId = true
const hasTicket = false;

console.log(hasId && hasTicket) // false, because and statement requires all conditions to be true
console.log(hasId || hasTicket) // true, because or statement requires at least one condition to be true
console.log(!hasId) // false, because it just reverse the existed value


// Template Literals -> combination of strings and variables in one line

const name = "Piyush Kumar Shukla"
let age = 19
let skills  = "Frontend Development"
let isGraduated = false

console.log(`Hello I'm ${name} and i am ${age} years old. I have skills like ${skills} and i am not graduated yet.`)
// We use backticks to write template strings and add dollar sign with curly braces to put variables or expressions in the same line.
