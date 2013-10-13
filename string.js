(function(yrExternals) {

    yrExternals['encode-uri-component'] = function(str) {
        return encodeURIComponent(str);
    };

    yrExternals['str-contains'] = function(str, substr) {
        return str.indexOf(substr) > -1;
    };

    yrExternals['str-length'] = function(str) {
        return str.length;
    };

    yrExternals['str-substr'] = function(str, start, length) {
        return str.substr(start, length);
    };

    yrExternals['str-substr-after'] = function(str, search) {
        var index = str.search(search);
        if (index > -1) {
            return str.substr(index + 1);

        } else {
            return ''
        }
    };

    yrExternals['str-substr-before'] = function(str, search) {
        var index = str.search(search);
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

    yrExternals['str-plural'] = function(num, nom, gen, plu) {
        var result, i;

        num = num % 100;

        if (num >= 11 && num <= 19) {
            result = plu;
        }
        else {
            i = num % 10;

            switch (i) {
                case 1:
                    result = nom;
                break;
                case 2:
                case 3:
                case 4:
                    result = gen;
                break;
                default:
                    result = plu;
            }
        }

        return result;
    };

})(yr.externals);
