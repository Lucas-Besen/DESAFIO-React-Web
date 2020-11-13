import axios from 'axios'
const BASE_URL = 'http://localhost:3030/api'

export function entrar(dadosEntrar) {
    const [email, senha] = dadosEntrar
    const request =  axios.post(`${BASE_URL}/login`,{email, senha})
    return {
        type: 'ENTRAR',
        payload: request
    }
}
export function add (dadosAdd){
    const [nome, telefone, email, senha] = dadosAdd
    const request = axios.post(`${BASE_URL}/cadastro/`,{ email, nome, telefone, senha})
    return{
        type: 'ADD',
        payload: request
    }
}
export function sair (email){
    const request = axios.put(`${BASE_URL}/login/`,{email})
    return{
        type: 'SAIR',
        payload: request
    }
}

export function atualiza (ativo){
    return{
        type: 'SAIR',
        payload: ativo
    }
}
