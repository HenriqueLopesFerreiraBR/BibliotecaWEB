const mysql = require('mysql2/promise');
const Sequelize = require('sequelize');

let host = "localhost"
let user = "henrique"
let password = "342124"
let database = "db_biblioteca"

const connection = new Sequelize(database,user,password,{
    host: "localhost",
    dialect: 'mysql',
    timezone: '-03:00'
});


module.exports = connection;