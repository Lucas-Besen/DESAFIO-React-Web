const INITIAL_STATE = {dadosBD:[] }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ENTRAR':
            return{...state, dadosBD: action.payload.data}
        case 'ADD':
            return {...state,  dadosBD: action.payload.data}
        case 'SAIR':
            return{...state,  dadosBD: action.payload.data}
        default:
            return state
    }
}