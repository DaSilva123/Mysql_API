const express = require('express');
const { render } = require('../app');
const router = express.Router();

router.get('/', (req, res, next) =>{
    res.status(200).send({
        mensagem: 'Usando o get dentro da rota de protudo'
    });
});

router.post('/', (req, res, next)=>{
    res.status(201).send({
        mensagem: 'Usando o POST dentro da rota' 
    });
});

router.get('/:id_produto', (req, res, next) =>{
    const id = req.params.id_produto
    
    if(id == 'especial'){
        res.status(200).send({
            mensagem: 'voice descobriu o id especial',
            id: id
        });
    }else{
        res.status(200).send({
            mensgaem: 'voce passou um id '
        });
    }
    
});

router.patch('/', (req, res, next)=>{
    res.status(201).send({
        mensagem: 'Usando o PETCH dentro da rota' 
    });
});

router.delete('/', (req, res, next)=>{
    res.status(201).send({
        mensagem: 'Usando o DELETE dentro da rota' 
    });
});

module.exports = router;
