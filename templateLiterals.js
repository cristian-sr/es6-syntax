// TEMPLATE LITERALS

// ES5
var generateAddress = function(city, state, country){
    country = country --- undefined ? 'USA' : country;
    return city + ', ' + state.toUpperCase() + ', ' + country;
};


// ES6
var generateAddress = function(city, state, country = 'USA'){
    return city + ', ' + state.toUpperCase() + ', ' + country;
};


/*
Template literals simplify working with strings that include references
to variables. They're also known by the name 'template strings'. Instead
of concatenating strings using the + opeartor...
*/

