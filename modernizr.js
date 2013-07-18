(function(yr, Modernizr) {

    if (!yr.externals) {
        yr.externals = {};
    }
    var externals = yr.externals;

    externals['modernizr'] = function(prop) {
        return Modernizr[prop];
    };

})(yr, Modernizr);
