var split = require('../');
var fs = require('fs');

var src = fs.readFileSync(__dirname + '/../test/mixed.css', 'utf8');
var chunks = split(src);
console.dir(chunks);
