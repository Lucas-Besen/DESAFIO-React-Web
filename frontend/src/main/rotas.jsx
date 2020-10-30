import React from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'


import App from './app'
import Login from '../login/telaLogin'
import Cadastro from '../cadastro/telaCadastro'
import Usuario from '../usuario/telaUsuario'

export default props => (
    <Router history={hashHistory}>
        <Route path='/login' component={Login} />
        <Route path ='/cadastro'component={Cadastro} />
        <Route path ='/usuario'component={Usuario} />
        <Redirect from='*' to='/login' />
    </Router>
)

