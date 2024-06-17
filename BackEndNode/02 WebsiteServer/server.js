const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const mimetypes = {
    'html': 'text/html',
    'css': 'text/css',
    'js': 'text/javascript',
    'png': 'image/png',
    'jpeg': 'image/jpeg',
    'jpg' : 'image/jpeg'
};

