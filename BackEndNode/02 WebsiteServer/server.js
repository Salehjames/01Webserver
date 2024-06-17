const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const { unescape } = require('querystring');

const mimetypes = {
    'html': 'text/html',
    'css': 'text/css',
    'js': 'text/javascript',
    'png': 'image/png',
    'jpeg': 'image/jpeg',
    'jpg' : 'image/jpeg'
};

http.createServer(() => {
    var myuri = url.parse(req.url).pathname
    var filename = path.join(process.cwd(), unescape(myuri));
    console.log('File you are looking for is: ' + filename);
    var loadfile;

    try {
        loadfile = fs.lstatSync(filename)
    } catch (error) {
        
    }
})