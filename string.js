(function(yrExternals) {

    yrExternals['encode-uri-component'] = function(str) {
        return encodeURIComponent(str);
    };

    yrExternals['str-contains'] = function(str, substr) {
        return (str || '').indexOf(substr) > -1;
    };

    yrExternals['str-length'] = function(str) {
        return str.length;
    };

    yrExternals['str-substr'] = function(str, start, length) {
        return str.substr(start, length);
    };

    yrExternals['str-substr-after'] = function(str, search) {
        var index = str.indexOf(search);
        if (index > -1) {
            return str.substr(index + 1);

        } else {
            return ''
        }
    };

    yrExternals['str-substr-before'] = function(str, search) {
        var index = str.indexOf(search);
        if (index > -1) {
            return str.substr(0, index);
        } else {
            return '';
        }
    };

    yrExternals['str-to-lower'] = function(str) {
        return str.toLowerCase();
    };

    yrExternals['str-to-upper'] = function(str) {
        return str.toUpperCase();
    };

})(yr.externals);
