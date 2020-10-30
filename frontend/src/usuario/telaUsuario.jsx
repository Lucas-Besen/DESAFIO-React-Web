import React, {Component} from 'react'
import {connect} from 'react-redux'
import { getList } from '../login/confirmaAction'

class usuario extends Component {   
    
    constructor(props){
        super(props)
   
    }
    componentWillMount(){
        this.props.trazer()
    }
    render(){
        return(
            <div>
                <h1>Logado</h1>
                <div>
                    <a href='#/sair'>

                    <button type="button" className="btn btn-danger">Sair</button>
                    </a>
                </div>
            </div>        
        )
    }
}


const mapStateToProps = (state) => ({
    dados: state.busca.list
})
const mapDispachtToprops = (dispacht) =>({
    trazer: () => dispacht(getList())
})
export default connect(mapStateToProps,mapDispachtToprops)(usuario)



