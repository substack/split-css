var cssp = require('cssp');
var concatMap = require('concat-map');

module.exports = function (src) {
    var tree = cssp.parse(src);
    var output = [];
    
    tree.slice(1).forEach(function (node) {
        if (node[0] !== 'ruleset') {
            output.push(stringify(node));
            return;
        }
        
        var selector = node[1];
        var chunks = chunkSelector(selector);
        output.push.apply(output, chunks);
        
        var block = node[2];
        output.push(stringify(block));
    });
    
    return output.reduce(function (acc, x) {
        if (Array.isArray(x)) {
            acc[acc.length-1] += x[0];
            x.slice(1).forEach(function (e) { acc.push(e) });
        }
        else acc[acc.length - 1] += x
        return acc;
    }, [ '' ]);
};

function chunkSelector (node) {
    //return [ stringify(node) ];
    return concatMap(node.slice(1), function (s) {
        if (s[0] !== 'simpleselector') return [ stringify(s) ];
        return s.slice(1).map(chunkSimpleSelector);
    });
}

function chunkSimpleSelector (node) {
    if (node[0] === 'clazz' && node[1][0] === 'ident') {
        var s = stringify([ node[0], [ 'ident', '' ] ]);
        return [ s, node[1][1] ];
    }
    else {
        return stringify(node);
    }
}

function stringify (node) {
    return cssp.CSSTranslator.match(node, node[0]);
}
