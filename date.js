(function(yrExternals) {

    var createToday = function() {
        var today = new Date();
        today.setMinutes(0);
        today.setHours(0);
        today.setSeconds(0);
        return today;
    };

    yrExternals['date-is-today'] = function(timestamp) {
        timestamp = parseInt(timestamp, 10) * 1000;
        return createToday().getTime() <= timestamp;
    };

    yrExternals['date-is-week-current'] = function(timestamp) {
        timestamp = parseInt(timestamp, 10) * 1000;
        var weekAgo = new Date(createToday().getTime() - 7 * 24 * 3600 * 1000);

        return weekAgo.getTime() <= timestamp;
    };

    yrExternals['date-is-yesterday'] = function(timestamp) {
        timestamp = parseInt(timestamp, 10) * 1000;
        var today = createToday();
        var yesterday = new Date(today.getTime() - 24 * 3600 * 1000);

        return yesterday.getTime() <= timestamp && timestamp < today.getTime();
    };

    yrExternals['date-now'] = function() {
        return +new Date();
    };

})(yr.externals);
