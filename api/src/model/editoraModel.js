const Sequelize = require('sequelize');
const connection = require('../database/connection');

const Livro = require('./livroModel')

const Editora = connection.define('editora',{
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },endereco:{
        type: Sequelize.STRING,
        allowNull: false
    },bairro:{
        type: Sequelize.STRING,
        allowNull: false
    },cidade:{        
        type: Sequelize.STRING,
        allowNull: false
    },uf:{
        type: Sequelize.STRING,
        allowNull: false
    }
})



// Editora.sync({force:true})

module.exports = Editora;