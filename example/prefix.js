var split = require('../');
var fs = require('fs');

var src = fs.readFileSync(__dirname + '/style.css', 'utf8');
var output = split(src).join('PREFIX-');
console.log(output);
