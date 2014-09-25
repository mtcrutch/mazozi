var express = require('express'),
    app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express['static'](__dirname + '/../client/app'));

app.get('*', function (request, response) {
    'use strict';
    response.status(404).send('Whoops, nothing here');
});

app.listen(app.get('port'), function () {
    'use srtict';
    console.info('Node app is running at: %d', app.get('port'));
});
