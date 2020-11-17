const express = require('express');
const Cadastro = require ('../controllers/Cadastro');
const Login = require ('../controllers/login');
const Dados = require('../controllers/dadosUsuario');
const verifica = require('../middleware/verifica');

const router = express.Router();

router.post('/cadastro', Cadastro.cadastro);
router.post('/login', Login.login);
router.post('/dados',verifica, Dados.dados);



module.exports = router;