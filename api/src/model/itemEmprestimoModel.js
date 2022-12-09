const Sequelize = require('sequelize');
const connection = require('../database/connection');

const Aluno = require('./alunoModel')


const ItemEmprestimo = connection.define('item_emprestimo',{
    
})

Aluno.hasOne(ItemEmprestimo);
ItemEmprestimo.belongsTo(Aluno)

module.exports = ItemEmprestimo;