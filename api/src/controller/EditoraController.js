const express = require('express');
const route = express.Router()
const Editora = require('../model/editoraModel')


route.get('/', async (req,res)=>{
    try {
        const editoras = await Editora.findAll();
        res.status(200).json(editoras);
    } catch (error) {
        res.status(400).json(error);        
    }
})

route.get('/:id', async (req,res)=>{
    try {
        var id = parseInt(req.params.id);

        const editora = await Editora.findByPk(id);
        res.status(200).json(editora);
    } catch (error) {
        res.status(400).json(error);        
    }
})

route.post('/', async (req,res)=>{
    try {
        var nome = req.body.nome
        var endereco = req.body.endereco
        var bairro = req.body.bairro
        var cidade = req.body.cidade
        var uf = req.body.uf
    
        await Editora.create({
            nome: nome,
            endereco: endereco,
            bairro: bairro,
            cidade: cidade,
            uf: uf
        })

        res.status(201).json({message:"Editora cadastrado com sucesso"})
    
    } catch (error) {
        res.status(401).json(error)
    }
})

route.put('/:id', async(req,res)=>{

    try {
        var id = req.params.id
        var nome = req.body.nome
        var endereco = req.body.endereco
        var bairro = req.body.bairro
        var cidade = req.body.cidade
        var uf = req.body.uf
    
        await Editora.update({
            nome: nome,
            endereco: endereco,
            bairro: bairro,
            cidade: cidade,
            uf: uf
        },{
            where:{
                id:id
            }
        })

        res.status(200).json({message:"Editora Atualizada com sucesso"});    
    } catch (error) {
        res.status(401).json(error)
    }
})

route.delete('/:id', async (req,res)=>{
    try {
        var id = parseInt(req.params.id)
        await Editora.destroy({
            where:{
                id:id
            }
        })
        res.status(200).json({message:"Editora deletada"}); 
    } catch (error) {
        res.status(200).json(error); 
    }
})

module.exports = route;