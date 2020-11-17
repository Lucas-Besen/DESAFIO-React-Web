import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sair} from '../login/confirmaAction'
import { trazerDados} from '../login/confirmaAction'

import './telaUsuario.css'
import Cookies from 'js-cookie'


class usuario extends Component {

    constructor(props) {
        super(props)
        this.state={
            nome:'',
            currentTime: 0
        } 
        this.sair = this.sair.bind(this)
        this.buscaDados = this.buscaDados.bind(this)
        /* this.gg = this.gg.bind(this) */
    }
    sair() {

        this.props.enviar(Cookies.get('token'))
            .then(() => {
                if (Cookies.get('Ativo')==='false') {
                    window.location.href = '#/sair'
                } else {
                    alert(this.props.mensagem)
                }
            })
            .catch(err => {

                console.error('fetch failed', err);
            });
    }


    contador(){
        this.setState((prevState) => ({
            currentTime: prevState.currentTime + 1
        }))
    }
   /*  gg(){
        this.setState({currentTime: 0})
    } */

    buscaDados(){
        this.props.trazer(Cookies.get('token'))
        .then(()=>{
        })
        .catch(err => {
            alert(this.props.mensagem)
        });
    }

    render() {

        
       /*  document.addEventListener('visibilitychange', ()=>{
            if(document.visibilityState==='hidden' && Cookies.get('Ativo')==='true'){
        
                this.contador()
                console.log(this.state.currentTime)
                if(this.state.currentTime===5){
                    this.sair()
                }                
            }
            if(document.visibilityState==='visible' && Cookies.get('Ativo')==='true' && this.state.currentTime!==0){
                console.log("aqui 0")
                this.gg()
                console.log(this.state.currentTime)
            } 

        })

 */     
        
        this.buscaDados()
        if(this.props.ativo!==undefined){
            Cookies.set('Ativo', this.props.ativo,)
        }
        if(this.props.token!==undefined){
            Cookies.set('token', this.props.token)
        }
        
        if(Cookies.get('Ativo')==='true'){
            return (
                <div >
                    <div className='posicaoDados'>
                        <h1>Seja bem vindo {Cookies.get('nome')}! </h1>
                        <br />
                        <br />
                        <p>Segue seus dados abaixo</p>
                        <br/>
                        <p>Nome: {this.props.nome}</p>
                        <p>Telefone: {this.props.telefone}</p>
                        <p>Email: {this.props.email}</p>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                       {/*  <p>O site esta em fase beta faltado implementar para o usuario poder trocar a senha e enviar um confirmaçao para o email digitado</p>  */}
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
    ativo: state.busca.dadosBD.ativo,
    nome: state.busca.dadosBD.nome,
    telefone: state.busca.dadosBD.telefone,
    email: state.busca.dadosBD.email,
    mensagem: state.busca.dadosBD.mensagem

})

const mapDispatchToprops = (dispatch) => ({
    enviar: ((token) => dispatch(sair(token))),
    trazer: ((token) => dispatch(trazerDados(token)))
})

export default connect(mapStateToProps, mapDispatchToprops)(usuario)







