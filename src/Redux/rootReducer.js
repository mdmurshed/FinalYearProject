import {combineReducers} from 'redux'
// Enter the file of the reducer
import loginReducer from './Login/loginReducer'
const rootReducer = combineReducers({
    log:loginReducer,
})

export default rootReducer