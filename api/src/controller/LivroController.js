const express = require('express');
const route = express.Router()
const Livro = require('../model/livroModel')


route.get('/', async (req,res)=>{
    try {
        const livros = Livro.findAll();
        res.status(200).json(livros);
    } catch (error) {
        res.status(400).json(error);        
    }
})

route.get('/:id', async (req,res)=>{
    try {
        var id = req.params.id;

        const livro = Livro.findByPK({
            where:{
                id:id
            }
        });
        res.status(200).json(livro);
    } catch (error) {
        res.status(400).json(error);        
    }
})


module.exports = route;