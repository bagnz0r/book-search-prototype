var http = require('http');
var url = require('url');
var request = require('request');

http.createServer(onRequest).listen(3090);

function onRequest(req, res) {
    var queryData = url.parse(req.url, true).query;
    if (queryData.url) {
        var body = '';

        request({
            url: queryData.url
        }).on('error', function(e) {
            res.end(e);
        }).on('response', function(_res) {
            _res.on('data', function(data) {
                body += data;
            });
        }).on('end', function() {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Content-Type', 'application/json');
            res.end(body);
        });
    }
    else {
        res.end('No URL was passed');
    }
}