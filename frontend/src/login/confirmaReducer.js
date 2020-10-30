const INITIAL_STATE = { list: [] }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'BUSCA':
            return {...state, list: action.payload.data}
        case 'ADD':
            return {}
        default:
            return state
    }
}