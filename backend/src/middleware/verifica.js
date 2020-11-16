const jwt = require('jsonwebtoken')
const env = require('../../src/.env')

module.exports = (req, res, next) => {
    try {
        const decode = jwt.verify(req.body.token, env.authSecret);
        req.usuario = decode;
        console.log(decode)
        next();
    } catch (err) {
        return res.send({mensagem: 'falha na autenticação', err});
    }

}