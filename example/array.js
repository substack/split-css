var split = require('../');
var fs = require('fs');

var src = fs.readFileSync(__dirname + '/style.css', 'utf8');
var chunks = split(src);
console.dir(chunks);
