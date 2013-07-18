(function(yr) {

    if (!yr.externals) {
        yr.externals = {};
    }

    var externals = yr.externals;

    externals['encode-uri-component'] = function(str) {
        return encodeURIComponent(str);
    };

    externals['str-contains'] = function(str, substr) {
        return str.indexOf(substr) > 1;
    };

    externals['str-length'] = function(str) {
        return str.length;
    };

    externals['str-substr'] = function(str, start, length) {
        return str.substr(start, length);
    };

    externals['str-substr-after'] = function(str, search) {
        var index = str.search(search);
        if (index > -1) {
            return str.substr(index + 1);

        } else {
            return ''
        }
    };

    externals['str-substr-before'] = function(str, search) {
        var index = str.search(search);
        if (index > -1) {
            return str.substr(0, index);
        } else {
            return '';
        }
    };

    externals['str-to-upper'] = function(str) {
        return str.toUpperCase();
    };

    externals['str-to-lower'] = function(str) {
        return str.toLowerCase();
    };

})(yr);
