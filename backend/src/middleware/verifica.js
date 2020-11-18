const jwt = require('jsonwebtoken')
const env = require('../../src/.env')

module.exports = (req, res, next) => {
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