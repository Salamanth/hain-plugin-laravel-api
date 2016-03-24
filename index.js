'use strict';

module.exports = (pluginContext) => {
    const shell = pluginContext.shell;

    function search(query, res) {
        const query_trim = query.trim();
        if (query_trim.length == 0) {
            return;
        }
        res.add({
            id: query_trim,
            payload: 'open',
            title: 'Search ' + query_trim,
            desc: 'Search in Laravel API'
        });
    }

    function execute(id, payload) {
        if (payload !== 'open') {
            return;
        }
        shell.openExternal(`https://laravel.com/api/5.2/search.html?search=${id}`);
    }

    return {search, execute};
};
