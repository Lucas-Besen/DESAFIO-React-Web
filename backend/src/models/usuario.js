const Sequelize = require('sequelize');


const sequelize = require('../database/database.js');


const Usuario = sequelize.define("usuario", {
    id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(200)
    },
    nome: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [3, 100]
        }
    },
    telefone: {
        allowNull: false,
        type: Sequelize.STRING(16),
    },

    senha: {
        allowNull: false,
        type: Sequelize.STRING(500)
    }
});

module.exports = Usuario;