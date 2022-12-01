const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require("dotenv")


const LivroModel = require('./model/livroModel')
const EditoraModel = require('./model/editoraModel')
const FuncionarioModel = require('./model/funcionarioMdel')
const CategoriaModel = require('./model/categoriaModel')
const AlunoModel = require('./model/alunoModel');


const LivroController = require('./controller/LivroController')


dotenv.config()

const port = 3001
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


app.use('/livro',LivroController)
// app.use(EditoraModel)
// app.use(FuncionarioModel)
// app.use(CategoriaModel)

app.listen(port, ()=>{
    console.log(`servidor rodando na porta:${port}`)
})