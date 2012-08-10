# split-css

Split css files into arrays that you can use to set prefixes.

# exposition

By splitting a css file in just the right places:

``` js
var css = [".","title.","today {\n    font-weight: bold;\n}\n\n.","body {\n    font-size: 14px;\n}"]
```

it's possible to set css prefixes with only a single `.join()`:

``` js
var output = css.join('PREFIX-')
console.log(output);
```

***

```
.PREFIX-title.PREFIX-today {
    font-weight: bold;
}

.PREFIX-body {
    font-size: 14px;
}
```

Having css files split into arrays like this is useful for browser experiments
where you need to set prefixes for entire css files dynamically but don't want
to bundle an entire css parser browser-side.

# example

``` js
var split = require('../');
var fs = require('fs');

var src = fs.readFileSync(__dirname + '/style.css', 'utf8');
var chunks = split(src);
console.dir(chunks);
```

***

```
[ '.',
  'body {\n    color: green;\n    padding: 15px;\n}\n\ndiv#',
  'robots .',
  'beep.',
  'boop {\n    text-align: center;\n}\n\n#',
  'a.',
  'b > .',
  'bling.',
  'blong {\n    margin: auto;\n}\n\na.',
  'clickable[href="/x.y.z"]:link, a.',
  'clickable[href="/x.y.z"]:visited {\n    color: cyan;\n}\n' ]
```

# methods

``` js
var split = require('split-css')
```

## split(src)

Return an array from the source string `src` split at the leading character in
each id or class definition in the selector rules.

# install

With [npm](http://npmjs.org) do:

```
npm install split-css
```

# license

MIT
