import express from "express"
import cors from "cors"

import database from "./firebase-db.js"
import { ref, get, set } from "firebase/database"

// iniciando o express
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rota raiz direciona para a pasta front
app.use("/", express.static("./front"))


app.get('/produtos', function (req, res) {
    // Pega uma referência para o caminho /bandas
    let produtosRef = ref(database, "/")
    get(produtosRef).then((snap) => {
        let listaprodutos = snap.val()
        console.log("listaprodutos", listaprodutos);
        return res.status(200).json(listaprodutos)
    })
})

app.post('/produtos', function (req, res) {
    console.log("recebi requisição POST com body: ",req.body);
    //pega os dados enviados na requisição
    let dados = req.body
    let id = dados.id
    // Pega uma referência para o caminho /produtos/<ID>
    let novoProdutoRef = ref(database, "/produtos/" + id)
    // Adiciona dados no firebase no caminho /produtos/<ID>
    set(novoProdutoRef, dados).then(() => {
        console.log("Adicionado")
        return res.status(200).json(dados)
    })
})

app.put('/produtos/:id', function (req, res) {
    console.log("recebi requisição PUT com body: ",req.body);
    //pega os dados enviados na requisição
    let dados = req.body
    let id = req.params.id
    // Pega uma referência para o caminho /produtos/<ID>
    let novoProdutoRef = ref(database, "/produtos/" + id)
    // Adiciona dados no firebase no caminho /produtos/<ID>
    set(novoProdutoRef, dados).then(() => {
        console.log("Adicionado")
        return res.status(200).json(dados)
    })
})

app.delete('/produtos/:id', function (req, res) {
    console.log("recebi requisição POST com body: ",req.body);
    //pega os dados enviados na requisição
    let dados = req.body
    let id = req.params.id
    // Pega uma referência para o caminho /produtos/<ID>
    let novoProdutoRef = ref(database, "/produtos/" + id)
    // Remove /produtos/<ID>
    set(novoProdutoRef, null).then(() => {
        console.log("Excluido")
        return res.status(200).json(dados)
    })
})

app.listen(3000, function () {
    console.log("Servidor rodando na porta 3000 ...");
})