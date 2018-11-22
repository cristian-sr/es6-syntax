// REST PARAMETERS

// ES5
var multiplyByNum = function(x){
    var nums = Array.prototype.slice.call(arguments, 1);
    nums.forEach(function(num){
        console.log(x * num);
    })
},

//ES6

var multiplyByNum = function(x, ...nums){
    nums.forEach(function(num){
        console.log(x * num);
    })
};

/*
Rest parameters allow you to capture any number of unnamed someFunction
parameters into an array. This reduces the complexity involved in manipulating
the arguments pseudo-array.
*/
