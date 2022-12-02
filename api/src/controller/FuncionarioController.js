const express = require('express');
const route = express.Router()
const Funcionario = require('../model/funcionarioModel')


route.get('/', async (req,res)=>{
    try {
        const funcionarios = await Funcionario.findAll();
        res.status(200).json(funcionarios);
    } catch (error) {
        res.status(400).json(error);        
    }
})

route.get('/:id', async (req,res)=>{
    try {
        var id = parseInt(req.params.id);

        const funcionario = await Funcionario.findByPk(id);
        res.status(200).json(funcionario);
    } catch (error) {
        res.status(400).json(error);        
    }
})

route.post('/', async (req,res)=>{
    try {
        var nome = req.body.nome
        var rua = req.body.rua
        var telefone = req.body.telefone
        var cpf = req.body.cpf
        var bairro = req.body.bairro
        var cidade = req.body.cidade
        var uf = req.body.uf
        var senha = req.body.senha
        var login = req.body.login
    
        await Funcionario.create({
            nome: nome,
            rua: rua,
            telefone:telefone,
            cpf : cpf,
            bairro: bairro,
            cidade: cidade,
            uf: uf,
            senha: senha, 
            login: login
        })

        res.status(201).json({message:"Funcionario cadastrado com sucesso"})
    
    } catch (error) {
        res.status(401).json(error)
    }
})

route.put('/:id', async(req,res)=>{

    try {
        var id = req.params.id
        var rua = req.body.rua
        var telefone = req.body.telefone
        var cpf = req.body.cpf
        var bairro = req.body.bairro
        var cidade = req.body.cidade
        var uf = req.body.uf
        var senha = req.body.senha
        var login = req.body.login

        await Funcionario.update({
            nome: nome,
            rua: rua,
            telefone:telefone,
            cpf : cpf,
            bairro: bairro,
            cidade: cidade,
            uf: uf,
            senha: senha, 
            login: login
        },{
            where:{
                id:id
            }
        })

        res.status(200).json({message:"Funcionario Atualizado com sucesso"});    
    } catch (error) {
        res.status(401).json(error)
    }
})

route.delete('/:id', async (req,res)=>{
    try {
        var id = parseInt(req.params.id)
        await Funcionario.destroy({
            where:{
                id:id
            }
        })
        res.status(200).json({message:"Funcionario deletado"}); 
    } catch (error) {
        res.status(200).json(error); 
    }
})

module.exports = route;