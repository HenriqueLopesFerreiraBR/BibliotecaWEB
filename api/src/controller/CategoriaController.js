const express = require('express');
const route = express.Router()
const Categoria = require('../model/categoriaModel');

route.get('/', async (req,res)=>{
    try {
        const categorias = await Categoria.findAll();
        res.status(200).json(categoria);
    } catch (error) {
        res.status(400).json(error);        
    }
})

route.get('/:id', async (req,res)=>{
    try {
        var id = parseInt(req.params.id);

        const categoria = await Categoria.findByPk(id);
        res.status(200).json(categoria);
    } catch (error) {
        res.status(400).json(error);        
    }
})

route.post('/', async (req,res)=>{
    try {
        var nome = req.body.nome
    
        await Categoria.create({
            nome : nome
        })

        res.status(201).json({message:"Categoria cadastrada com sucesso"})
    
    } catch (error) {
        res.status(401).json(error)
    }
})

route.put('/:id', async(req,res)=>{

    try {
        var id = req.params.id
        var nome = req.body.nome
       
    
        await Categoria.update({
            nome: nome,
        },{
            where:{
                id:id
            }
        })

        res.status(200).json({message:"Categoria Atualizada com sucesso"});    
    } catch (error) {
        res.status(401).json(error)
    }
})

route.delete('/:id', async (req,res)=>{
    try {
        var id = parseInt(req.params.id)
        await Categoria.destroy({
            where:{
                id:id
            }
        })
        res.status(200).json({message:"Categoria deletada"}); 
    } catch (error) {
        res.status(401).json(error)
    }
})


module.exports = route;