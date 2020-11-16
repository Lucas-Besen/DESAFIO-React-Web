import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sair } from '../login/confirmaAction'
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
        this.gg = this.gg.bind(this)
    }
    sair() {

        this.props.enviar(Cookies.get('email'))
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
    gg(){
        this.setState({currentTime: 0})
    }

    render() {

        document.addEventListener('visibilitychange', ()=>{
            if(document.visibilityState==='hidden' && Cookies.get('Ativo')==='true'){
        
                this.contador()
                console.log(this.state.currentTime)
                if(this.state.currentTime===5){
                    this.sair()
                }                
            }
           /*  if(document.visibilityState==='visible' && Cookies.get('Ativo')==='true' && this.state.currentTime!==0){
                console.log("aqui 0")
                this.gg()
                console.log(this.state.currentTime)
            } */

        })

        if(this.props.ativo!==undefined){
            Cookies.set('Ativo', this.props.ativo,{
                expires: 7
            })

        }
        if(this.props.email!==undefined){
            Cookies.set('email', this.props.email,{
                expires: 7
            })
        }
        if(this.props.nome!==undefined){
            Cookies.set('nome', this.props.nome,{
                expires: 7
            })
        }
        if(this.props.telefone!==undefined){
            Cookies.set('telefone', this.props.telefone,{
                expires: 7
            })
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
                        <p>Nome: {Cookies.get('nome')}</p>
                        <p>Telefone: {Cookies.get('telefone')}</p>
                        <p>Email: {Cookies.get('email')}</p>
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
    email: state.busca.dadosBD.email,
    nome: state.busca.dadosBD.nome,
    telefone: state.busca.dadosBD.telefone,
    ativo: state.busca.dadosBD.ativo,
    mensagem: state.busca.dadosBD.mensagem
})

const mapDispatchToprops = (dispatch) => ({
    enviar: ((email) => dispatch(sair(email)))
})

export default connect(mapStateToProps, mapDispatchToprops)(usuario)







