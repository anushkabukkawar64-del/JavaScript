function function_name(para) { 
    // do something
    console.log("");
    return "value";
}

function sumoftwonumbers(param1, param2) {
    return param1 + param2;
}

const sumoftwonumbersUsingArrowfunction = (param1, param2) => param1 + param2;

console.log(sumoftwonumbers(1,2));
console.log(sumoftwonumbersUsingArrowfunction(1,2));
sumoftwonumbers;

function sayHello(fname , lname) {
    console.log(`Hello ${fname} ${lname}`);
}

sayHello("Anushka");

let greet = function sayHello(fname , lname) {
    console.log(`Hello ${fname} ${lname}`);
}
greet("Anushka");

function addition(num1, num2) {
    return num1 + num2;
}

console.log(addition(1))