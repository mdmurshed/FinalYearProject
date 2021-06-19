import { ADD_ITEM,REMOVE_ITEM } from './cardType'

export const addCard = (addItm)=>{
    return{
        type:ADD_ITEM,
        payload:addItm
    }
}
export const removeCard = ()=>{
    return{
        type:REMOVE_ITEM
    }
}