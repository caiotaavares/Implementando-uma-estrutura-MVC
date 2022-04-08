const { Sequelize, DataTypes } = require('sequelize');
// Caminho do bd
const path = require('path');

// Cria o arquivo do bd
const sequelize = new Sequelize({
    dialect: 'sqlite',
    // Armazena e consulta na raiz do projeto o arquivo do bd
    storage: path.resolve(__dirname, '..', '..', 'db.sqlite')
})

// Função do sequelize que define o modelo (mnodel)
const Product = sequelize.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
})

// Faz o sequelize criar a tabela no bd caso ela não exista
Product.sync();

module.exports = Product;