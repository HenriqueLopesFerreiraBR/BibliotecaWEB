const express = require('express');
const route = express.Router()
const Livro = require('../model/livroModel')


route.get('/', async (req,res)=>{
    try {
        const livros = await Livro.findAll();
        res.status(200).json(livros);
    } catch (error) {
        res.status(400).json(error);        
    }
})

route.get('/:id', async (req,res)=>{
    try {
        var id = parseInt(req.params.id);

        const livro = await Livro.findByPk(id);
        res.status(200).json(livro);
    } catch (error) {
        res.status(400).json(error);        
    }
})

route.post('/', async (req,res)=>{
    try {
        var titulo = req.body.titulo
        var ano = req.body.ano
        var categoria = req.body.categoria
        var autor = req.body.autor
        var resumo = req.body.resumo
    
        await Livro.create({
            titulo: titulo,
            ano: ano,
            categoria: categoria,
            autor: autor,
            resumo: resumo
        })

        res.status(201).json({message:"Livro cadastrado com sucesso"})
    
    } catch (error) {
        res.status(401).json(error)
    }
})

route.put('/:id', async(req,res)=>{

    try {
        var id = req.params.id
        var titulo = req.body.titulo
        var ano = req.body.ano
        var categoria = req.body.categoria
        var autor = req.body.autor
        var resumo = req.body.resumo
    
        await Livro.update({
            titulo: titulo,
            ano: ano,
            categoria: categoria,
            autor: autor,
            resumo: resumo
        },{
            where:{
                id:id
            }
        })

        res.status(200).json({message:"Livro Atualizados com sucesso"});    
    } catch (error) {
        res.status(401).json(error)
    }
})

route.delete('/:id', async (req,res)=>{
    try {
        var id = parseInt(req.params.id)
        await Livro.destroy({
            where:{
                id:id
            }
        })
        res.status(200).json({message:"Livro deletado"}); 
    } catch (error) {
        res.status(200).json(error); 
    }
})

module.exports = route;