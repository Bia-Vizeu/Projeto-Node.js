const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'cantina',
});

const create = (req, res) => {
    let nome = req.query.nome;
    let preco = req.query.preco;
    let descricao = req.query.descricao;
    let custo = req.query.custo;


    let query = `INSERT INTO produtos (nome , preco  ,descricao, custo) value`;
    query += `('${nome}', '${preco}', '${descricao}', '${custo}')`;

    con.query(query, (err, result) => {
        if (err) {
            console.log("Erro ao cadastrar um produto");
        } else {
            console.log("Produto cadastrado com sucesso!");
        }
    });
}
const app = express();

app.use(express.json());
app.use(cors());


const produtos = (req, res) => {
    console.log("Funcionando");
}

app.get("/", produtos);
app.get("/produtos/create", create);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
})