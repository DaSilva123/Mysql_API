const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require("body-parser");

const rotaProdutos = require('./routes/produtos');
const rotaPedidos = require('./routes/pedidos');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json()); 

app.use((req, res, next) =>{
    res.header('Acces-Control-Allow-Origin', '#');
    res.header(
        'Acces-Control-Allow-Header',
        'Origin, Content-Type, X-Requrested-with, Accept, Authorization'
    );
    if (req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods','PUT, POST, DELETE, GET');
        return res.status(200).send({});
    }
    next();
});

app.use('/produtos', rotaProdutos);
app.use('/pedidos', rotaPedidos);

 app.use((req, res, next)=>{
    const erro = new Error('não encontrado');
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) =>{
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.message
        }
    });
});
module.exports = app;