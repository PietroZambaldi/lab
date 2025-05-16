var http = require('http');
var express = require('express');

var server = http.createServer(app);
server.listen(80);

console.log('Servidor rodando ...'.rainbow);