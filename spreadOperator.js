// SPREAD OPERATOR

// ES5

var someFunction(a, b, c, d){
    //do something with a, b, c, and d
};

var args = [1, 2, 4, 16];

someFunction.apply(null, args);



// ES6

var someFunction(a, b, c, d){
    //do something with a, b, c, and d
};

var args = [1, 2, 4, 16];

someFunction(...args);

/* 
The spread operator allows you to expand multiple elements of an
array. This is useful whe you need to pass an array of values as
an argument to a  function wich does not accep arrays. 
*/
