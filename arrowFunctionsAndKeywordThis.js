// ARROW FUNCTIONS AND THE KEYWORD this

// ES5
var Delay = function(delay, reaction) {
    this.delay = delay;
    this.reaction = reaction;
};

Delay.prototype.haveReaction = function() {
    setTimeout(function() {
        console.log(this.reaction);
    }.bind(this), this.delay);
};

// ES6
var Delay = function(delay, reaction) {
    this.delay = delay;
    this.reaction = reaction;
};

Delay.prototype.haveReaction = function() {
    setTimeout(() => {
        console.log(this.reaction);
    }, this.delay);
};

/*
In addition to their concise syntax, arrow functions offer advantages when
working with JS in an object-oriented way. consider the ES5 on the lef.
Because setTimeout invokes its callback as a free function invocation,
any reference to the keywork this inside that callback will refer to the global
context. We've learned a few way to address this problem.

One way is to use a closure variable to capture a refernce to our desired context.

Alternatively, we could use the bind method.

Arrow function expressions do not create their own this value. references to the
keyword this inside an arrow function expression will evaluate to the enclosing
context's this value.
*/
