import React, { Component } from 'react'
import { connect } from 'react-redux'
import { trazerDados} from '../login/confirmaAction'

import './telaUsuario.css'
import Cookies from 'js-cookie'


class usuario extends Component {

    constructor(props) {
        super(props)
        this.state={
            currentTime: 0
        } 
        this.sair = this.sair.bind(this)
        this.buscaDados = this.buscaDados.bind(this)
        /* this.contador = this.contador.bind(this) */
        
    }
    sair() {
        Cookies.remove('token')
        window.location.href = '#/login'
    }

  /*   contador(){

        this.setState((prevState) => ({
            currentTime: prevState.currentTime + 1
        })) 
    } */

    buscaDados(){
        this.props.trazer(Cookies.get('token'))
        .then(()=>{
            if(this.props.ativo){
                this.sair()
            }
        })
        .catch(err => { alert(this.props.mensagem) });
    }

    render() {

        if(this.props.token){
            Cookies.set('token', this.props.token)
        }
      /*   document.addEventListener('visibilitychange', ()=>{
    
            if(document.visibilityState==='hidden'){
                if(this.state.currentTime<=5){

                    this.contador()
                }
                console.log(this.state.currentTime)

                if(this.state.currentTime===5){
                    console.log('sair')
                    this.sair()
                }                
            }
            if(document.visibilityState==='visible'){
                console.log("aqui 0")
            } 
        }) */
        if(Cookies.get('token')){
            return (
                
                <div >
                    <div className='posicaoDados'>
                        {this.buscaDados()}
                        <h1>Seja bem vindo {this.props.nome}! </h1>
                        <br />
                        <br />
                        <p>Segue seus dados abaixo</p>
                        <br/>
                        <p>Nome: {this.props.nome}</p>
                        <p>Telefone: {this.props.telefone}</p>
                        <p>Email: {this.props.email}</p>
                    </div>
                    <div className='posicaoButton'>
                        <button type="button" className="btn btn-danger" onClick={this.sair}>Sair</button>
                    </div>
                </div>
            )
        }
        else{
            return (
                <div>
                    {window.location.href = '#/login'}
                </div>
            )
        }       
    }
}
const mapStateToProps = (state) => ({
    token: state.busca.dadosBD.token,
    nome: state.busca.dadosBD.nome,
    telefone: state.busca.dadosBD.telefone,
    email: state.busca.dadosBD.email,
    mensagem: state.busca.dadosBD.mensagem,
    ativo: state.busca.dadosBD.ativo
})
const mapDispatchToprops = (dispatch) => ({
    trazer: ((token) => dispatch(trazerDados(token)))
})
export default connect(mapStateToProps, mapDispatchToprops)(usuario)







