const Usuario = require('../models/usuario');
const status = require('http-status');
 

exports.sair = (req, res, next) => {
    const id = req.body.email;
    Usuario.findByPk(id)
        .then(usuario => {
            if (usuario) {
                usuario.update({
                    ativo: false,
                },{
                    where: {id: id}
                })
                .then( ()=> {
                    res.send({
                        mensagem:'deslogado',
                        ativo: usuario.ativo
                    });
                })
                .catch(error => next(error));
            }else{
                res.send({ativo: usuario.ativo, mensagem:'Erro'});
            }  

        })
        .catch(error => next(error));
}

