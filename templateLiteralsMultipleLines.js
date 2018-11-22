// TEMPLATE LITERALS (MULTIPLE LINES)

// ES5
var html = [
    '<div>',
    ' <span>',
    message,
    ' < /span>',
    '</div>'
].join('\n');


// ES6
var html = 
 `<div>
    <span>
      ${message}
    </span>
 </div>`

 /*
 Template literals improve the experience of working with strings wich
 contain multiple lines or whitespace.
 */
