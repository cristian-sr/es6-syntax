// ARROW FUNCTION EXPRESSIONS

// ES5
var mutiplier = function(x, y) {
    return x * y;
}


// ES6
var mutiplier = (x, y) => {
    return x * y;
}


// ES6 ALSO WORKS
var mutiplier = (x, y) => x * y;

/*
Arrow functions offer a new syntax for writing function expressions, Instead of
using the function keyword before defining some parameters, you can use a 'fat arrow'
after the parameters.

If the function body contains only one expression, you may omit the curly braces
and the return keyword, writing the entire function on one line.
*/




// ES5
var doubler = function(num) {
    return 2 * num;
}

// ES6
var doubler = num => 2 * num;

/*
If a function expects exactly one named parameter, you may omit the parentheses
around that parameter.
*/



// ES5
var doubleValues = function(values){
    return values.map(function(value) {
        return value * 2;
    });
};

// ES6
var doubleValues = function(values) {
    return values.map(value => value * 2);
};

//This abbreviated function syntax works nicely with higher order functions

// ES6 ALSO WORKS
var doubleValues = values => values.map(value => value * 2);

//We can refactor our ES6 version of doubleValues to be even mor concise.