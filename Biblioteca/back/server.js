const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyparser = require("body-parser");

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'biblioteca'
});

const create = (req, res) => {
    let livro = req.body.livro;
    let autor = req.body.autor;
    let publicacao = req.body.publicacao;
    let descricao = req.body.descricao;
    let numeracao = req.body.numeracao;


    let query = `INSERT INTO pedidos (livro , autor , publicacao ,descricao, numeracao) value`;
    query += `('${livro}', '${autor}', '${publicacao}', '${descricao}', '${numeracao}')`;

    con.query(query, (err, result) => {
        if (err) {
            console.log("Erro ao cadastrar um livro");
        } else {
            console.log("Livro cadastrado com sucesso!");
        }
    });
}

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));

const teste = (req, res) => {
    console.log("Funcionando");
}

app.get("/", teste);
app.post("/pedidos", create);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
})