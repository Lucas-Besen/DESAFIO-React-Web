const express = require('express');
const Cadastro = require ('../controllers/Cadastro');
const Login = require ('../controllers/login');
const Dados = require('../controllers/dadosUsuario');
const Confirma = require('../controllers/confirma');
const verifica = require('../middleware/verifica');

const router = express.Router();

router.post('/cadastro', Cadastro.cadastro, Confirma.confirma);
router.post('/login', Login.login);
router.post('/dados',verifica.sessao, Dados.dados);
router.get('/confimadados/:token',verifica.email, Confirma.confirmado)


module.exports = router;