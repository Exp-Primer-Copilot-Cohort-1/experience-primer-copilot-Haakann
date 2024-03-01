// create web server

var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');

// server start
http.createServer(function (req, res) {
    var pathname = url.parse(req.url).pathname;

    if (pathname == '/comment') {
        console.log('comment');
        var body = '';
        req.on('data', function (data) {
            body += data;
        });
        req.on('end', function () {
            var post = qs.parse(body);
            console.log(post);
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('comment');
        });
    } else if (pathname == '/getComments') {
        console.log('getComments');
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('getComments');
    } else if (pathname == '/getComments') {
        console.log('getComments');
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('getComments');
    } else if (pathname == '/getComments') {
        console.log('getComments');
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('getComments');
    } else {
        console.log('index');
        fs.readFile('index.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    }
}).listen(8000);