#!/usr/bin/env node
var fs = require('fs');
var split = require('../');
var concatMap = require('concat-map');

var files = process.argv.slice(2);
if (files.length) {
    var xs = concatMap(files, function (file) {
        var src = fs.readFileSync(file, 'utf8');
        return split(src);
    });

    var output = JSON.stringify(xs);
    console.log(output);
}
else {
    var data = '';
    process.stdin.on('data', function (buf) { data += buf });
    
    process.stdin.on('end', function () {
        var xs = split(data);
        console.log(JSON.stringify(xs));
    });
    
    process.stdin.resume();
}
