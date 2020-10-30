import React,{Component} from 'react'
import {connect} from 'react-redux'
import {add} from '../login/confirmaAction'
import './talaCadastro.css'

class Cadastro extends Component {

	constructor(props){
		super(props)

		this.state={
			nome:'',
			email:'',
			telefone:'',
			senha:'',
			confirmaSenha: ''

		}
		this.onChange = this.onChange.bind(this)
		this.cadastar = this.cadastar.bind(this)
	}

	onChange (nome, valor){
		if(nome==='nome'){
			this.setState({nome: valor.target.value})
		}
		else if(nome==='email'){
			this.setState({email: valor.target.value})
		}
		else if(nome==='telefone'){
			this.setState({telefone: valor.target.value})
		}
		else if(nome==='senha'){
			this.setState({senha: valor.target.value})
		}
		else if(nome==='confirmaSenha'){
			this.setState({confirmaSenha: valor.target.value})
		}
	}
	cadastar(e){

		if(this.state.senha===this.state.confirmaSenha && this.state.senha !='' ){
			this.props.enviar([
				this.state.nome,
				this.state.telefone,
				this.state.email,
				this.state.senha
			])
				alert("cadastrado")
				window.location.href='#/usuario'
							
		}else if(this.state.senha !=''){
			alert("Senhas Diferentes")
		}
	}
	
	render(){
		return(
			<form>
				<div className='CadastroPosicao'>
					<h2 className='CadastroH2'>Cadastro</h2>
					<div>
						<label  className='label'>Nome </label>
						<br/>
						<input type="name" className='CadastroInput' placeholder='Nome Completo'required="required" value={this.state.nome} onChange={(e) => this.onChange('nome',e)}/>
					</div>
					<div>
						<label  className='label'>E-mail </label>
						<br/>
						<input type="email" className='CadastroInput' placeholder='lucas@email.com' required="required" value={this.state.email} onChange={(e) => this.onChange('email', e)} />
					</div>
					<div>
						<label className='label'>Telefone</label>
						<br/>
						<input type="text" className='CadastroInput' placeholder='(00)123456789' pattern="\(\d{2}\)\d{9}" value={this.state.telefone} onChange={(e) => this.onChange('telefone', e)} />
					</div>
					<div>
						<label className='label'>Senha</label>
						<br/>
						<input type="password" className='CadastroInput'required="required" value={this.state.senha}onChange={(e)=> this.onChange('senha',e)} />
					</div>
					<div>
						<label className='label'>Confirmar</label>
						<br/>
						<input type="password" className='CadastroInput'required="required" value={this.state.confirmaSenha} onChange={(e)=> this.onChange('confirmaSenha', e)}/>
					</div>
					<div className='CadastroBT1'>
						<button type="submit" value="Cadastar" className="btn btn-primary" onClick={this.cadastar} >Cadastrar</button>
					</div>
					<div className='CadastroBT2'>
					<a href='#/login'>
						<button type="button" className="btn btn-danger">Cancelar</button>
					</a>
				</div>			
				</div>
			</form>
		)
	}
} 
const mapStateToprops = state => ({
	confirmaDados: state.busca.list
})
const mapDispatchToProps = (dispatch) =>( {
	enviar: (dados) => dispatch(add(dados))
})
export default connect(mapStateToprops, mapDispatchToProps)(Cadastro)