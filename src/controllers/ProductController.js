/**
 * Controlador recebe ações e requisições
 * das páginas da view
 * 
 * Cada ação do controller vai estar mapeada
 * em uma rota (index.js)
 * 
 * Cada rota tem um endereço ligado a ela seguida
 * da anexação do controlador
 */

const Product = require('../models/Product');

module.exports = {
    // Rota para criar um elemento novo
    create: async (req, res) => {
        // Criar novo produto
        
        // Usa o Product do bd para armazenar no bd a req
        await Product.create(req.body)

        return res.redirect('/products')
    },

    // Rota para mostrar os elementos da lista
    list: async (_, res) => {
        const products = await Product.findAll()
        return res.render('product/list', { products });
    },

    // Rota para mostrar o formulário
    form: (_, res) => res.render('product/form')
}