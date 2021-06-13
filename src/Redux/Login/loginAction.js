import { LOGIN,LOGOUT } from './LoginTypes'

export const login = (data)=>{
    return{
        type:LOGIN,
        payload:data
    }
}

export const logout = ()=>{
    return{
        type:LOGOUT
    }
}