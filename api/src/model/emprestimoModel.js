const Sequelize = require('sequelize');
const connection = require('../database/connection');

const Aluno = require('./alunoModel');
const Livro = require('./livroModel');
const Funcionario = require('./funcionarioMdel');
const { HasMany, HasOne } = require('sequelize');

const Emprestimo = connection.define('emprestimo',{
    devolucao:{
        type: Sequelize.STRING
    }
})

Aluno.hasOne(Emprestimo);
Emprestimo.belongsTo(Aluno)


//Emprestimo.sync({force:true})

module.exports = Emprestimo;