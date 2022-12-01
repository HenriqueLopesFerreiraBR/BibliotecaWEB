const Sequelize = require('sequelize');
const connection = require('../database/connection');

const Aluno = connection.define('aluno',{
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },telefone:{
        type: Sequelize.STRING,
        
    },cpf:{        
        type: Sequelize.STRING,
        allowNull: false
    },rua:{
        type: Sequelize.STRING,

    },bairro:{
        type: Sequelize.STRING,

    },cidade:{
        type: Sequelize.STRING,
    },uf:{
        type: Sequelize.STRING,

    },multa:{
        type: Sequelize.INTEGER
    }
})


// Aluno.sync({force:true})

module.exports = Aluno;