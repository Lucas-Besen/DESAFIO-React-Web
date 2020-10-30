import React, {Component} from 'react'
import {connect} from 'react-redux'
import './talaLogin.css'
import {getList} from './confirmaAction'
class Login extends Component {


	constructor(props){
		super(props)

		this.state={
			email: '',
			senha: ''
		}
		this.onChange = this.onChange.bind(this)		
		this.entrar = this.entrar.bind(this)
	
	}
	onChange (nome, valor )  {

		if(nome==="email"){
		this.setState({email: valor.target.value})
		}
		if(nome==='senha'){
			this.setState({senha: valor.target.value})
		}
	}
	componentWillMount(){
		this.props.trazer()
	 }
 	entrar (e){
		
		if(this.state.email==='teste@teste.com'&&this.state.senha==='1234'){ 
				window.location.href='#/usuario'
		}
		else if( this.state.email!=''&& this.state.senha!=''){
			alert("senha ou e-mail incorretos")
		} 
	}
	
	 
	render(){	
	
		return(
		<form>
			<div className='loginPosicaoo'>
				<h2 className='loginH2'>Login</h2>
				 
				<div>
					<label>E-mail </label>
					<br/>
					<input type="email" className='loginInput'  value={this.state.email} onChange={(e)=> this.onChange('email',e)} placeholder='lucas@email.com' required="required" />
				</div>
				<div>
					<label>Senha </label>
					<br/>
					<input type="password" className='loginInput' value={this.state.senha} onChange={(e)=> this.onChange('senha',e)} required="required"/>
				</div>
		
				<div className='loginBT1'>
					<button type="submit" className="btn btn-success" onClick={this.entrar}>Entrar</button>
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

const mapStateToProps = (state) => ({teste: state.busca.list})

const mapDispatchToProps = (dispatch) => ({
	trazer: () => dispatch(getList())
})
export default connect(mapStateToProps, mapDispatchToProps)(Login)




