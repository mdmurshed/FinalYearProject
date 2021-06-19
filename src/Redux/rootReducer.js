import {combineReducers} from 'redux'
// Enter the file of the reducer
import loginReducer from './Login/loginReducer'
import cardReducer from './Card/cardReducer'
const rootReducer = combineReducers({
    log:loginReducer,
    card:cardReducer
})

export default rootReducer