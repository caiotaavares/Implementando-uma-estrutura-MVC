const express = require("express");
const path = require("path");


// CONTROLADORES
const ProductController = require('./controllers/ProductController');
const HomeController = require('./controllers/HomeController');

// CONFIGURAÇÕES DO SERVIÇO
const app = express();
app.set('view engine', 'pug');
// Linkando as views
// Entrar na pasta views través do diretório atual (index.js)
app.set('views', path.resolve(__dirname, 'views'))
app.use(express.urlencoded());

// ROTAS PARA O CONTROLADOR (controller)

// Mostra a home
app.get('/', HomeController.home);

// Mostra os produtos
app.get('/products', ProductController.list);

// Mostra a tela de formulário
app.get('/products/form', ProductController.form);

// Faz um post para a tela de formulário
app.post('/products/create', ProductController.create);

// EXECUTAR O SERVIDOR
app.listen(8080, () => {
    console.log("Server running on: http://localhost:8080");
})