module.exports = {
    development: {
        database: {
            host: 'localhost',
            port: 3306,
            name: 'cadastro',
            dialect: 'mysql',
            user: 'root',
            password: ''
           
        }
    },
    production:{
        database: {
            host: process.env.DB_HOST,
            host: process.env.DB_PORT
        }
    },
    credenciais:{
        email_host:'smtp.gmail.com' ,
        email_port: 465,
        email_user:'naoresponda888@gmail.com',
        email_pass:'NaoResponda888' 
    }
}