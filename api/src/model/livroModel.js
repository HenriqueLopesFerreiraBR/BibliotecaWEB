const Sequelize = require('sequelize');
const connection = require('../database/connection');

const Editora = require('./editoraModel')

const Livro = connection.define('livros',{
    titulo:{
        type: Sequelize.STRING,
        allowNull: false
    },ano:{
        type:Sequelize.STRING

    },categoria:{
        type: Sequelize.STRING,
        allowNull: false
    },autor:{
        type: Sequelize.STRING,
        allowNull: false
    },resumo:{
        type: Sequelize.TEXT
    }
})


Livro.belongsTo(Editora,{
    constraint: true,
    foreignKey: 'idEditora'
})


 Livro.sync({force:true})

module.exports = Livro;