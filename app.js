/**
 * Created by Dan_Shappir on 7/20/15.
 */
'use strict';

var DEFAULT_PORT = 8088;

var program = require('commander');
var app = require('http').createServer(handler);
var fs = require('fs');

program
    .version('0.0.1')
    .option('-p, --port <n>', 'Force app port (requires sudo on osx)', parseInt)
    .parse(process.argv);

var port = program.port || process.env.PORT || DEFAULT_PORT;
app.listen(port);
console.log('Listening on port', port);

// HTTP server for static files
function handler(req, res) {
    var url = req.url && req.url !== '/' ? req.url : '/index.html';
    if (url.indexOf('..') !== -1) {
        res.writeHead(403);
        return res.end('Error accessing resource');
    } else {
        if (url.indexOf('/node_modules/') !== 0) {
            url = '/public' + url;
        }
        fs.readFile(__dirname + url,
            function (err, data) {
                if (err) {
                    res.writeHead(500);
                    return res.end('Error loading resource');
                }
                res.writeHead(200);
                res.end(data);
            });
    }
}
