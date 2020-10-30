import axios from 'axios'
const BASE_URL = 'http://localhost:3003/api'

export function getList() {

    const request =  axios.get(`${BASE_URL}/cadastrar`)
    return {
        type: 'BUSCA',
        payload: request
    }
}
export function add (dados){
    const [nome, telefone, email, senha] = dados
    const request = axios.post(`${BASE_URL}/cadastrar/`,{nome,telefone,email,senha})
    return{
        type: 'ADD'
    }
}


