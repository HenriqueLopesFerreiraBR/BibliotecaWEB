const Sequelize = require('sequelize');
const connection = require('../database/connection');


 const Categoria = connection.define('categoria',{
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    }
 })

// Categoria.sync({force:true});

module.exports = Categoria; 