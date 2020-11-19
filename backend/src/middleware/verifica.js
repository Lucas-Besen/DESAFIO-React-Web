const jwt = require('jsonwebtoken')
const env = require('../../src/.env')

exports.sessao = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decode = jwt.verify(token, env.authSecret);
        req.token = decode;
        next();
    } catch (err) {
        return res.send({
            mensagem: 'falha na autenticação',
            ativo: true
    });
    }

}
exports.email = (req, res, next) => {
    try {
        const token = req.params.token;
        const decode = jwt.verify(token, env.authSecret);
        req.token = decode;
        next();
    } catch (err) {
        return res.send("Desculpe mas nao foi possivel autenticado seu usuario");
    }

}