# split-css

Split css files into arrays that you can trivially set prefixes with.

# exposition

By splitting a css file in just the right places:

``` js
var css = [];
```

it's possible to set css prefixes with only a single `.join()`:

```
var output = css.join('PREFIX-')
console.log(output);
```

***

```

```

Having css files split into arrays like this is useful for browser experiments
where you need to set prefixes for entire css files dynamically but don't want
to bundle an entire css parser browser-side.

# example


