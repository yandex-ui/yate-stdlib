(function(yrExternals, Modernizr) {

    yrExternals['modernizr'] = function(prop) {
        return Modernizr[prop] === true;
    };

})(yr.externals, Modernizr);
