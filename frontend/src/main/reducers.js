import { combineReducers } from 'redux'
import BuscaDados from '../login/confirmaReducer'

const rootReducer = combineReducers({

busca: BuscaDados
    
})
export default rootReducer


