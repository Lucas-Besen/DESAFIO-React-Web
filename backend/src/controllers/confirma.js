const Usuario = require('../models/usuario');
const nodemailer = require('nodemailer')
const config = require('../config/config')
const jwt = require('jsonwebtoken');
const env = require('../../src/.env') 

const transporter = nodemailer.createTransport({
    host: config.credenciais.email_host,
    port: config.credenciais.email_port,
    auth:{
        user:config.credenciais.email_user, 
        pass:config.credenciais.email_pass
    }
})
exports.confirma = (req, res, next )=>{
    const token = jwt.sign({
        email: req.email
    },env.authSecret,{
        expiresIn:"1d"
    })
    transporter.sendMail({
        from: config.credenciais.email_user,
        to: req.email,
        replyTo:config.credenciais.email_user,
        subject:"link de confirmaçao",
        text:`http://localhost:3030/api/confimadados/${token}`
    }).then(info =>{
        res.send(info)
    }).catch(err =>{
        res.send(err)
    })

}

exports.confirmado = (req, res, next)=>{
    const id = req.token.email;
    Usuario.findByPk(id)
        .then(usuario => {
            if (usuario) {
                usuario.update({
                    verificado: true,
                },{
                    where: {id: id}
                })
                .then( ()=> {
                    res.send("usuario autenticado com sucesso");
                })
                .catch(error => next(error));
            }else{
                res.send("Desculpe mas nao foi possivel autenticado seu usuario");
            }  

        })
        .catch(error => next(error));
}