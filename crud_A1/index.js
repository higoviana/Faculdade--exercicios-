const http = require("http");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const porta = 8080;
app.set("port", porta);
const server = http.createServer(app);
server.listen(porta);


id = 1; 

let produtos = [
  {
    id: 1,
    nome: "Banana",
    preco: 5,
  },
  {
    id: 2,
    nome: "Maça",
    preco: 15,
  },
];



app.get('/produtos', function(req, res, next) {
  console.log("Minha lista de compras");
  res.status(200).json(produtos);
});

  app.post("/produtos", (req, res, next) => {
    const produto = {
    id: (id += 1),
        nome: req.body.nome,
        preco: req.body.preco,
      };
      produtos.push(produto);
      res.status(201).json(produto);
    
    });
    
app.put("/produtos", (req, res, next) => {
  produtos.forEach((produto) => {
    if (produto.id === req.body.id) {
      (produto.nome = req.body.nome),
        (produto.preco = req.body.preco);
    }
  });
  res.status(200).end();
});

app.delete("/produtos", (req, res, next) => {
  let indice = produtos.findIndex((obj) => obj.id == req.body.id);
  if (indice >= 0) {
    produtos.splice(indice, 1);
    res.status(200).json(produtos);
  } else {
    res.status(204).end();
  }
});