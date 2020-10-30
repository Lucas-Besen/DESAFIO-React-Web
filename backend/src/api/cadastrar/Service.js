const cadastrar = require('./esquema')
const errorHandler = require('../common/errorHandler')

cadastrar.methods(['get', 'post', 'put', 'delete'])
cadastrar.updateOptions({new: true, runValidators: true})
cadastrar.after('post', errorHandler).after('put', errorHandler)

cadastrar.route('count', (req, res, next) => {
    cadastrar.count((error, value) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json({value})
        }
    })
})

module.exports = cadastrar