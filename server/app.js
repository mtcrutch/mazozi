var PORT = process.ENV.PORT || 8080,
    http = require('http'),
    nodeStatic = require('node-static'),
    file = new nodeStatic.Server('../client/app');

http.createServer(function (request, response) {

    'use strict';

    request.addListener('end', function () {
        file.serve(request, response);
    }).resume();

}).listen(PORT);

console.info('Starting server on port: %d', PORT);
