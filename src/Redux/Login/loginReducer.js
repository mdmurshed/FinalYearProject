import { LOGIN,LOGOUT } from './LoginTypes'

const initialState = {
    chack:false,
    user:""
}

const reducer = (state= initialState,action)=>{
    switch(action.type){
        case LOGIN: return { 
            chack:true,
            user:action.payload
        }
        case LOGOUT: return {
            chack:false,
            user:""
        }
        default: return state
    }
}
export default reducer