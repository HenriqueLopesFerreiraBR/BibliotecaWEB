const Sequelize = require('sequelize');
const connection = require('../database/connection');

const Funcionario = connection.define('funcionario',{

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
    },senha:{
        type: Sequelize.STRING,
        allowNull: false
    },login:{
        type: Sequelize.STRING,
        allowNull: false
    }
})

// Funcionario.sync({force:true})

module.exports = Funcionario;