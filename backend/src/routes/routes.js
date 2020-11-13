const express = require('express');
const Cadastro = require ('../controllers/Cadastro');
const Login = require ('../controllers/login');
const Sair = require('../controllers/sair');
const verifica = require('../middleware/verifica');

const router = express.Router();

router.post('/cadastro', Cadastro.cadastro);
router.post('/login', Login.login);
router.put('/login', Sair.sair);

module.exports = router;