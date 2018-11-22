// DESTRUCTURING (WITH OBJECTS)

// ES5 SYNTAX

var user = {
    first: 'Benji',
    last: 'Marianacci',
    age: 32
};

var greet = function(person){
    var first = person.first;
    var last = person.last;

    console.log('Hi, ' + first + ' ' + last);
};

greet(user); // 'Hi, benji Marianacci'


// ES6 SYNTAX
var user = {
    first: 'Benji',
    last: 'Marinacci',
    age: 32
};

var greet = function({
    first,
    last
}){
    console.log('Hi, ' + first + ' ' + last);
};

greet(user); //'Hi, Benji Marinacci'

//==============================================