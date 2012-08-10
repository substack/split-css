var test = require('tap').test;
var split = require('../');
var fs = require('fs');

var src = fs.readFileSync(__dirname + '/mixed.css', 'utf8');
var dst = fs.readFileSync(__dirname + '/mixed_dst.css', 'utf8');

test('mixed', function (t) {
    t.equal(split(src).join('pre-'), dst);
    t.end();
});
