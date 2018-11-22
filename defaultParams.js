// DEFAULT PARAMETERS

// ES5
var generateAddress = function(city, state, country){
    country = country === undefined ? 'USA' : country;
    return city + ', ' + state.toUpperCase() + ','
    country;
};

generateAddress('Oakland', 'CA'); //=> 'Oakland, CA, USA'
generateAddress('Calgary', 'AB', 'Canada'); //=> 'Calgary, AB, Canada'


// ES6

var generateAddress = function(city, state, country = 'USA'){
    return city + ', ' + state.toUpperCase() + ', '
    country;
};

generateAddress('Oakland', 'CA'); //=> 'Oakland, CA, USA'
generateAddress('Calgary', 'AB', 'Canada'); //=> 'Calgary, AB, Canada'

// ES6 supports supplying default values for function parameters within the function signature
