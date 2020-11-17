const Usuario = require('../models/usuario');
const status = require('http-status');

exports.dados = (req, res, next) => {
    const id = req.token.email;

    Usuario.findByPk(id)
        .then(usuario => {

            if(usuario.ativo){
                if (usuario) {
                    res.send({
                        mensagem: "Dados encontrados",
                        nome: usuario.nome,
                        telefone: usuario.telefone,
                        email:usuario.id
                    });
                } else {
                    res.send({
                        mensagem: "Dados não encontrados"
                    });
                }
            }
            else{
                res.send({
                    mensagem: "Usuario Não esta Ativo "
                })
            }
            

        })
        .catch(error => next(error));
}