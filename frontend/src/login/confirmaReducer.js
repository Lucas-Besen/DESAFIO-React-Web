const INITIAL_STATE = {dadosBD:[],dadosVerifica:[] }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ENTRAR':
            return{...state, dadosBD: action.payload.data}
        case 'ADD':
            return {...state,  dadosBD: action.payload.data}
        case 'TRAZERDADOS':
            return{...state,  dadosBD: action.payload.data}
        default:
            return state
    }
}