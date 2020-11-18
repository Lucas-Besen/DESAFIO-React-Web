import React, { Component } from 'react'
import { connect } from 'react-redux'
import './talaLogin.css'
import { entrar } from './confirmaAction'
import Cookies from 'js-cookie'

class Login extends Component {

	constructor(props) {
		super(props)

		this.state = {
			email: '',
			senha: ''
		}
		this.onChange = this.onChange.bind(this)
		this.entrar = this.entrar.bind(this)

	}
	onChange(nome, valor) {
		if (nome === "email") {
			this.setState({ email: valor.target.value })
		}
		if (nome === 'senha') {
			this.setState({ senha: valor.target.value })
		}
	}

	entrar(e) {
		e.preventDefault();
		this.props.enviar([
			this.state.email,
			this.state.senha
		])
		.then(() => {
			if (this.props.token) {
				window.location.href = '#/usuario'
			}
			else {
				alert(this.props.mensagem)
			}
			})
			.catch(err => { alert('fetch failed', err) });
	}
	render() {

		if (Cookies.get('token')) {
			return (
				<div>
					{window.location.href = '#/usuario'}
				</div>
			)
		} else {
			return (
				<form onSubmit={this.entrar}>
					<div className='loginPosicaoo'>
						<h2 className='loginH2'>Login</h2>

						<div>
							<label className='label' >E-mail </label>
							<br />
							<input type="email" className='loginInput' value={this.state.email} onChange={(e) => this.onChange('email', e)} placeholder='lucas@email.com' required />
						</div>
						<div>
							<label className='label'>Senha </label>
							<br />
							<input type="password" className='loginInput' value={this.state.senha} onChange={(e) => this.onChange('senha', e)} required />
						</div>

						<div className='loginBT1'>
							<button type="submit" className="btn btn-success">Entrar</button>
						</div>
						<div className='loginBT2'>
							<a href='#/cadastro'>
								<button type="button" className="btn btn-primary">Cadastrar</button>
							</a>
						</div>
					</div>
				</form>
			)

		}
	}
}

const mapStateToProps = (state) => ({
	mensagem: state.busca.dadosBD.mensagem,
	token: state.busca.dadosBD.token
})

const mapDispatchToProps = (dispatch) => ({
	enviar: (dados) => dispatch(entrar(dados))
})
export default connect(mapStateToProps, mapDispatchToProps)(Login)




