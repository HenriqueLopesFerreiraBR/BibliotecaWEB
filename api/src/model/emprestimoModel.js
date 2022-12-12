const Sequelize = require('sequelize');
const connection = require('../database/connection');

const Aluno = require('./alunoModel');
const Livro = require('./livroModel');
const ItemEmprestimo = require('./itemEmprestimoModel')
const Funcionario = require('./funcionarioMdel');
const { HasMany, HasOne } = require('sequelize');

const Emprestimo = connection.define('emprestimo',{
    devolucao:{
        type: Sequelize.STRING
    }
})

Emprestimo.belongsTo(Aluno , {
    contraint: true,
    foreignKey: 'idAluno'
})

Emprestimo.belongsTo(ItemEmprestimo , {
    contraint: true,
    foreignKey: 'idItemEmprestimo'
})

Emprestimo.sync({force:true})

module.exports = Emprestimo;