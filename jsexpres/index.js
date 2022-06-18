/*// Carrega o modulo HTTP do Node
//HTTP protocolo que vai ser usado
var http = require("http");

// Cria um servidor HTTP e uma escuta de requisições para a porta 8000
http.createServer(function (request, response) {

    // Configura o cabeçalho da resposta com um status HTTP e um Tipo de Conteúdo
    response.writeHead(200, { 'Content-Type': 'text/plain' });

    // Manda o corpo da resposta "Olá Mundo"
    response.end('Olá Mundo\n');
}).listen(8000, '127.0.0.1');

// Imprime no console a URL de acesso ao servidor
console.log('Servidor executando em http://127.0.0.1:8000/');

*/

/*
const express = require('express');
var servidor = require('express');
const { append } = require('express/lib/response');
var app = servidor();//formatos chamadas e endpoints do meu express
const bodyParser = require('body-parser'); //Paerser -> é meu leitor de Json
app.use(bodyParser.json);

*/

const http = require("http");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const porta = 3000;
app.set("port", porta);
const server = http.createServer(app);
server.listen(porta);

id = 1;

let clientes = [
    {
        id: 1,
        nome: "Higo",
        endereco: "Rua dos bobos",
        cidade: "sao paulo",
    },
];

app.get('/clientes', function(req, res, next){
    console.log("enviei um cliente");
    res.status(200).json(cliente);
  //local de entrada servidor

});

app.get('/', function(req, res){
    res.send ("Ola voces");
  //local de entrada servidor

});

/*
app.get('/higo',function(req, res){ // o que eu envio e o que eu respondo
    res.send ("Ola Higo");
})

*/

/*
app.listen(3000, function(){
    console.log("Servidor esta ativo");
});

*/

app.post('/clientes', (req, res, next) => {
    const cliente = {
        id: (id += 1),
            nome: req.body.nome,
            endereco: req.body.endereco,
            cidade: req.body.cidade,
    };

    clientes.push(cliente);
    res.status(201).json(cliente);

});