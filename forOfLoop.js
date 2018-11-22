// FOR... OF LOOP

// ES5
var nums = [1, 4, 6, 7];

for (var i=0; i < nums.length; i++){
    console.log(nums[i]);
}

var string = 'hello world';

for (var j=0; j < string.length; j++){
    console.log(string[j]);
}


// ES6
var nums = [1, 4, 6, 7];

for (var val of nums) {
    console.log(val);
}

for (var letter of 'hello world') {
    console.log(letter);
}

/*
In ES6, some collection (like Arrays, Sets, and Maps) are considered to be
'iterable'. You can use the for ... of loop to iterate over every value stored
in these kinds of collections.
*/