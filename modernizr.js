(function(yr, Modernizr) {

    var externals = yr.externals;

    externals['modernizr'] = function(prop) {
        return Modernizr[prop];
    };

})(yr, Modernizr);