const Sequelize = require('sequelize');
const connection = require('../database/connection');

const Aluno = require('./alunoModel')
const Livro = require('./livroModel')


const ItemEmprestimo = connection.define('item_emprestimo',{
    
})

// ItemEmprestimo.belongsTo(Aluno, {
//     contraint: true,
//     foreignKey: 'idAluno'
// });
ItemEmprestimo.belongsTo(Livro, {
    contraint: true,
    foreignKey: 'idLivro'
});

ItemEmprestimo.sync({force: true});

module.exports = ItemEmprestimo;