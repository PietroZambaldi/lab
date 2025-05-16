var http = require('http');
var express = require('express');
var colors = require('colors');
var bodyParser = require('body-parser');


var app = express();
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set('views', './views');

var server = http.createServer(app);
server.listen(80);

console.log('Servidor rodando ...'.rainbow);

app.get('/cadastro', function(requisicao, resposta){
var nome = requisicao.query.nome;
var username = requisicao.query.username;
var senha = requisicao.query.senha;
var data = requisicao.query.data;

resposta.render('resposta', {nome, username, senha, data})

})

app.get ('/login', function(req, resposta){
    var user = req.query.Lusername;
    var senha = req.query.Lsenha;

})