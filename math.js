(function(yrExternals) {

    yrExternals['math-abs'] = function(num) {
        return Math.abs(num);
    };

    yrExternals['math-random'] = function() {
        return Math.round(Math.random() * 100000);
    };

    yrExternals['math-round'] = function(num) {
        return Math.round(num);
    };

    yrExternals['math-sum'] = function(nodeset) {
        var result = 0;
        for (var i = 0, l = nodeset.length; i < l; i++) {
            result += Number(nodeset[i].data);
        }

        return result;
    };

})(yr.externals);
