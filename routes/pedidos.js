const express = require('express');
const { render } = require('../app');
const router = express.Router();

router.get('/', (req, res, next) =>{
    res.status(200).send({
        mensagem: 'retorna o pedido'
    });
});

router.post('/', (req, res, next)=>{
const pedito = {
    id_pedido: req.body.id_pedido,
    quantidade: req.body.quantidade
}

    res.status(201).send({
        mensagem: 'O pedido foi criado',
        peditoCriado:pedito
    });
});

router.get('/:id_pedido', (req, res, next) =>{
    const id = req.params.id_pedido
        res.status(200).send({
        mensagem: 'detalhe do pedido ',
        id_pedido: id
    });
});


router.delete('/', (req, res, next)=>{
    res.status(201).send({
        mensagem: 'Pedido excluido' 
    });
});

module.exports = router;
